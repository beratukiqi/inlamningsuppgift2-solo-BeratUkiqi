import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PrimaryButton from "../components/PrimaryButton";
import { useSelector } from "react-redux";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { changeMaxPoints, changeNoOfPlayers } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";
import style from "../styles/pages/LandingPage.module.scss";
import { colorData } from "../app/colorData";
import superheroNames from "../app/nameGenData";
import { useRef } from "react";

function LandingPage() {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);
    const inputRef = useRef(null);

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

        return fullName;
    };

    const generateColor = (i) => {
        let chosenIndex = i;
        return colorList[chosenIndex];
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

    const handleNoOfPlayers = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = gameSettings.noOfPlayers;
        }

        const noOfPlayers = parseInt(inputValue);
        dispatch(changeNoOfPlayers(noOfPlayers));
        e.target.value = noOfPlayers; // Re-Sets value to match game Max Points in case empty
        e.target.blur();
    };

    const generatePlayers = () => {
        for (let i = 1; i <= gameSettings.noOfPlayers; i++) {
            const name = superheroNameGenerator();
            const newPlayer = {
                id: name + i,
                name: name,
                bgColor: generateColor(i - 1),
                points: 0,
                pointsToAdd: 0,
                pointsHistory: [],
            };
            dispatch(generatePlayer(newPlayer));
        }
    };

    function handleNegativeButton() {
        const inputValue = Number(inputRef.current.value);
        inputRef.current.value = -inputValue;
        console.log("CLICK");
    }

    return (
        <section className={style.pageContainer}>
            <main className={style.contentWrapper}>
                <Header title={"Let’s set up some things before we start!"} />
                <ContentContainer
                    title={"Enter MAX points"}
                    renderContent={() => (
                        <>
                            <InputField
                                type={"number"}
                                defaultValue={gameSettings.maxPoints}
                                onBlur={handleMaxPoints}
                                inputmode={"numeric"}
                                pattern={"[d+-]"}
                                ref={inputRef}
                            />
                            <button onClick={handleNegativeButton}>
                                Negate
                            </button>
                        </>
                        // Wish to have a button here
                    )}
                />

                <ContentContainer
                    title={"Enter number of players"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.noOfPlayers}
                            onBlur={(e) => handleNoOfPlayers(e)}
                            pattern={"d*"}
                        />
                    )}
                />

                <PrimaryButton
                    title={"Next"}
                    path={"/register"}
                    action={generatePlayers}
                />
            </main>
        </section>
    );
}

export default LandingPage;
