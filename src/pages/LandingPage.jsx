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

function LandingPage() {
    const playerList = useSelector((state) => state.players);

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
                        <InputField type={"number"} defaultValue={400} />
                    )}
                />

                <ContentContainer
                    title={"Enter number of players"}
                    renderContent={() => (
                        <InputField type={"number"} defaultValue={6} />
                    )}
                />
                {/* <ContentContainer
                    title={"Leaderboard"}
                    renderContent={() => <Leaderboard />}
                />

                <ContentContainer
                    title={"Scoreboard"}
                    renderContent={() => <ScoreBoard />}
                />
                <ContentContainer
                    title={"Danger Zone!"}
                    renderContent={() =>
                        // Renders players with < 100 points left in asc order
                        playerList
                            .filter((player) => player.pointsLeft <= 100)
                            .sort((a, b) => a.pointsLeft - b.pointsLeft)
                            .map((player, i) => (
                                <PlayerCardSmall
                                    key={i}
                                    player={player}
                                    dangerZone={true}
                                    bgColor={player.bgColor}
                                />
                            ))
                    }
                /> */}
            </section>

            <PrimaryButton title={"Next"} path={"/register"} />
        </main>
    );
}

export default LandingPage;
