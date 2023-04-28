import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PrimaryButton from "../components/PrimaryButton";
import PlayerCardSmall from "../components/PlayerCardSmall";
import PlayerCardTiny from "../components/PlayerCardTiny";
import PlayerCardBig from "../components/PlayerCardBig";
import ScoreBoard from "../components/ScoreBoard";
import Leaderboard from "../components/Leaderboard";
import PlayerSetup from "../components/PlayerSetup";
import SecondaryButton from "../components/SecondaryButton";
import { useSelector } from "react-redux";

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
                    title={"Leaderboard"}
                    renderContent={() => <Leaderboard />}
                />

                <ContentContainer
                    title={"Registration is open!"}
                    renderContent={() => <PlayerSetup />}
                />
                <SecondaryButton title={"Add new player"} />
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
                />
            </section>

            <PrimaryButton title={"Next"} path={"/register"} />
        </main>
    );
}

export default LandingPage;
