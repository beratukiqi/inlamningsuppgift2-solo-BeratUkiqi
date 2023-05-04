import { useDispatch, useSelector } from "react-redux";
import { changeNoOfPlayers } from "../app/gameSettingsSlice";
import { shufflePlayerList, generatePlayer } from "../app/playersSlice";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import ShuffleIcon from "../components/icons/ShuffleIcon";
import GameRulesIcon from "../components/icons/GameRulesIcon";
import PrimaryButton from "../components/PrimaryButton";
import PlayerRegister from "../components/PlayerRegister";
import SecondaryButton from "../components/SecondaryButton";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/Register.module.scss";
import superheroNames from "../app/nameGenData";
import { colorData } from "../app/colorData";
import { useNavigate } from "react-router-dom";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gameSettings = useSelector((state) => state.gameSettings);
    const playerList = useSelector((state) => state.players);

    // Takes an array and shuffles it based off Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        const copiedArray = [...array];
        for (let i = copiedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
        }
        return copiedArray;
    };

    // Shuffles the players and updates the state accordingly
    const handleShuffleClick = () => {
        const playersListCopy = [...playerList];
        const shuffledPlayers = shuffleArray(playersListCopy);
        dispatch(shufflePlayerList(shuffledPlayers));
    };

    // Generates a unique name to a player
    const superheroNameGenerator = () => {
        let superHeroNameList = superheroNames;

        let firstIndex = Math.floor(
            Math.random() * superHeroNameList.first.length
        );
        let secondIndex = Math.floor(
            Math.random() * superHeroNameList.second.length
        );

        let firstName = superHeroNameList.first[firstIndex];
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

    const generateColor = () => {
        let colorList = colorData;
        let chosenIndex = gameSettings.noOfPlayers;
        return colorList[chosenIndex];
    };

    // Adds a new player object to the state.
    const addNewPlayer = () => {
        const name = superheroNameGenerator();
        const newPlayer = {
            id: name,
            name: name,
            bgColor: generateColor(),
            points: 0,
            pointsToAdd: 0,
            pointsHistory: [],
        };

        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers + 1));
        dispatch(generatePlayer(newPlayer));
    };

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <GameRulesIcon onClick={() => navigate("/rules")} />
                )}
            />
            <main className="contentWrapper">
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
