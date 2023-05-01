import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PrimaryButton from "../components/PrimaryButton";
import PlayerCardSmall from "../components/PlayerCardSmall";
import PlayerCardTiny from "../components/PlayerCardTiny";
import PlayerCardBig from "../components/PlayerCardBig";
import ScoreBoard from "../components/ScoreBoard";
import Leaderboard from "../components/Leaderboard";
import PlayerSetup from "../components/PlayerRegister";
import SecondaryButton from "../components/SecondaryButton";
import { useSelector } from "react-redux";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { changeMaxPoints, changeNoOfPlayers } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";

function LandingPage() {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);

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
            const newPlayer = {
                id: i,
                name: "Player " + i,
                bgColor: "#A5E9B4",
                points: 0,
                pointsToAdd: 0,
                pointsHistory: [0],
            };
            dispatch(generatePlayer(newPlayer));
        }
    };

    return (
        <main>
            <Header title={"Let’s set up some things before we start!"} />
            <section
                className="contentWrapper"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "3rem",
                }}
            >
                <ContentContainer
                    title={"Enter MAX points"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.maxPoints}
                            onBlur={handleMaxPoints}
                        />
                    )}
                />

                <ContentContainer
                    title={"Enter number of players"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.noOfPlayers}
                            onBlur={(e) => handleNoOfPlayers(e)}
                        />
                    )}
                />
            </section>

            <PrimaryButton
                title={"Next"}
                path={"/register"}
                action={generatePlayers}
            />
        </main>
    );
}

export default LandingPage;
