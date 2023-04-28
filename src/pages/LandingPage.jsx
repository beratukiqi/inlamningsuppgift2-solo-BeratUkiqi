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

const MAX_POINTS = 500;
const player = {
    name: "Berat",
    points: 414, // Each round point + prev points here
    pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
    get pointsLeft() {
        return MAX_POINTS - this.points;
    },
};

const playerList = [
    {
        name: "Berat",
        points: 490, // Each round point + prev points here
        pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
        get pointsLeft() {
            return MAX_POINTS - this.points;
        },
    },
    {
        name: "Lisa",
        points: 441, // Each round point + prev points here
        pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
        get pointsLeft() {
            return MAX_POINTS - this.points;
        },
    },
];

const noOfPlayers = 6;

function LandingPage() {
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
                            .map((player) => (
                                <PlayerCardSmall
                                    player={player}
                                    dangerZone={true}
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
