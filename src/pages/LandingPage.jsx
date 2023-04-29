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
import { changeMaxPoints } from "../app/gameSettingsSlice";

function LandingPage() {
    const gameSettings = useSelector((state) => state.gameSettings);
    const dispatch = useDispatch();

    const handleMaxPoints = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = 0;
        }
        const newMaxPoints = parseInt(inputValue);

        dispatch(changeMaxPoints({ newMaxPoints }));
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
                        <InputField type={"number"} defaultValue={6} />
                    )}
                />
            </section>

            <PrimaryButton title={"Next"} path={"/register"} />
        </main>
    );
}

export default LandingPage;
