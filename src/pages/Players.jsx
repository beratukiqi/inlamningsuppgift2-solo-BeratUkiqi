import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PlayerRegister from "../components/PlayerRegister";
import SecondaryButton from "../components/SecondaryButton";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import { changeNoOfPlayers, changeMaxPoints } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderMenu from "../components/HeaderMenu";
import { useNavigate } from "react-router-dom";
import style from "../styles/pages/Players.module.scss";
import InputField from "../components/InputField";
import { colorData } from "../app/colorData";
import superheroNames from "../app/nameGenData";

function Players() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gameSettings = useSelector((state) => state.gameSettings);
    const playerList = useSelector((state) => state.players);

    let colorList = colorData;
    let superHeroNameList = superheroNames;

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

    const generateRandomColor = () => {
        let chosenIndex = gameSettings.noOfPlayers;
        return colorList[chosenIndex];
    };

    const addNewPlayer = () => {
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers + 1));
        const name = superheroNameGenerator();
        const newPlayer = {
            id: name,
            name: name,
            bgColor: generateRandomColor(),
            points: 0,
            pointsToAdd: 0,
            pointsHistory: [],
        };
        dispatch(generatePlayer(newPlayer));
    };

    const handleMaxPoints = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = gameSettings.maxPoints;
        }
        const newMaxPoints = parseInt(inputValue);
        dispatch(changeMaxPoints({ newMaxPoints }));
        e.target.value = newMaxPoints; // Re-Sets value to match game Max Points in case empty
        e.target.blur();
    };

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                    </>
                )}
            />
            <main className={style.contentWrapper}>
                <Header
                    title={"Game settings"}
                    subTitle={"Feel free to tweak things to your likings. "}
                />
                <ContentContainer
                    title={"Players"}
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
                <ContentContainer
                    title={"MAX points"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.maxPoints}
                            onBlur={handleMaxPoints}
                        />
                    )}
                />
            </main>
        </section>
    );
}

export default Players;
