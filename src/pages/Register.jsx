import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import PlayerRegister from "../components/PlayerRegister";
import { changeNoOfPlayers } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HeaderMenu from "../components/HeaderMenu";
import style from "../styles/pages/Register.module.scss";
import { colorData } from "../app/colorData";
import superheroNames from "../app/nameGenData";
import { shufflePlayerList } from "../app/playersSlice";
import ShuffleIcon from "../components/icons/ShuffleIcon";

function Register() {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);
    const playerList = useSelector((state) => state.players);

    let colorList = colorData;
    let superHeroNameList = superheroNames;

    function shuffleArray(array) {
        const copiedArray = [...array];
        for (let i = copiedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
        }
        return copiedArray;
    }

    const handleShuffleClick = () => {
        const playersListCopy = [...playerList];
        const shuffledPlayers = shuffleArray(playersListCopy);
        dispatch(shufflePlayerList(shuffledPlayers));
    };

    const generateColor = () => {
        let chosenIndex = gameSettings.noOfPlayers;
        return colorList[chosenIndex];
    };

    const superheroNameGenerator = () => {
        let firstIndex = Math.floor(
            Math.random() * superHeroNameList.first.length
        );
        let firstName = superHeroNameList.first[firstIndex];
        let secondIndex = Math.floor(
            Math.random() * superHeroNameList.second.length
        );
        let secondName = superHeroNameList.second[secondIndex];
        let fullName = firstName + " " + secondName;

        // Generates a new name if name already exists
        playerList.forEach((player) => {
            if (player.name === fullName) {
                console.log("Matched names, changing name");
                fullName = superheroNameGenerator();
            }
        });

        return fullName;
    };

    const addNewPlayer = () => {
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers + 1));
        const name = superheroNameGenerator();
        const newPlayer = {
            id: name,
            name: name,
            bgColor: generateColor(),
            points: 0,
            pointsToAdd: 0,
            pointsHistory: [],
        };

        dispatch(generatePlayer(newPlayer));
    };
    return (
        <section className={style.pageContainer}>
            <HeaderMenu />
            <main className={style.contentWrapper}>
                <Header
                    title={"You have been given superhero names! "}
                    subTitle={
                        "If you are not feeling like superheroes, change the names by clicking on a player"
                    }
                />
                <ContentContainer
                    title={"Registration is open!"}
                    renderContent={() => (
                        <>
                            <PlayerRegister hasEditableNames={true} />
                            <SecondaryButton
                                title={"Add another player"}
                                action={addNewPlayer}
                            />
                        </>
                    )}
                />
                <p className={style.shuffleBtnMessage}>
                    Use the list above as a guide to who sits where. Spice it up
                    by shuffling a couple of times!.
                </p>
                <PrimaryButton
                    className={style.shuffleButton}
                    title={"Shuffle players"}
                    action={handleShuffleClick}
                    icon={<ShuffleIcon />}
                />
                <PrimaryButton title={"Players are ready"} path={"/overview"} />
            </main>
        </section>
    );
}

export default Register;
