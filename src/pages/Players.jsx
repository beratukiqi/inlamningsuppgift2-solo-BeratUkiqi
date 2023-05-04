import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { shufflePlayerList, generatePlayer } from "../app/playersSlice";
import {
    changeNoOfPlayers,
    changeMaxPoints,
    setNamesData,
    setColorsData,
} from "../app/gameSettingsSlice";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import InputField from "../components/InputField";
import ShuffleIcon from "../components/icons/ShuffleIcon";
import PrimaryButton from "../components/PrimaryButton";
import PlayerRegister from "../components/PlayerRegister";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import SecondaryButton from "../components/SecondaryButton";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/Players.module.scss";

function Players() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const gameSettings = useSelector((state) => state.gameSettings);
    const playerList = useSelector((state) => state.players);
    useEffect(() => {
        async function fetchNameData() {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                // Sets the fetched names to the state for future use
                dispatch(setNamesData(data.names));
                dispatch(setColorsData(data.colors));
            } catch (error) {
                console.error(error, "Something went wrong");
            }
        }
        fetchNameData();
    }, []);

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
        let superHeroNameList = gameSettings.namesData;

        let firstIndex = Math.floor(
            Math.random() * superHeroNameList[0].first.length
        );
        let secondIndex = Math.floor(
            Math.random() * superHeroNameList[1].second.length
        );

        let firstName = superHeroNameList[0].first[firstIndex];
        let secondName = superHeroNameList[1].second[secondIndex];
        let fullName = `${firstName} ${secondName}`;

        // Generates a new name if the name already exists
        playerList.forEach((player) => {
            if (player.name === fullName) {
                fullName = superheroNameGenerator();
            }
        });

        return fullName;
    };

    const generateColor = () => {
        let colorList = gameSettings.colorsData;
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

    // Takes input and updates a new MAX points to the state
    const handleMaxPoints = (e) => {
        let inputValue = e.target.value;
        inputValue = !inputValue
            ? gameSettings.maxPoints
            : parseInt(inputValue);

        dispatch(changeMaxPoints({ newMaxPoints: inputValue }));
        e.target.value = inputValue; // Changes the UI to the new value
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
            <main className="contentWrapper">
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
                <PrimaryButton
                    className="shuffleButton"
                    title={"Shuffle players"}
                    action={handleShuffleClick}
                    icon={<ShuffleIcon />}
                />
                <ContentContainer
                    title={"MAX points"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.maxPoints}
                            onBlur={handleMaxPoints}
                            inputmode={"numeric"}
                            pattern={"[d+-]"}
                        />
                    )}
                />
                <PrimaryButton title={"Let's play!"} path={"/overview"} />
            </main>
        </section>
    );
}

export default Players;
