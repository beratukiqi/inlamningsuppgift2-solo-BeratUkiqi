import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PrimaryButton from "../components/PrimaryButton";
import PlayerCardSmall from "../components/PlayerCardSmall";
import PlayerCardTiny from "../components/PlayerCardTiny";
import PlayerCardBig from "../components/PlayerCardBig";

const player = {
    name: "Berat",
    points: 414, // Each round point + prev points here
    pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
};

const noOfPlayers = 6;

function LandingPage() {
    return (
        <main>
            <Header title={"Let’s set up some things before we start!"} />
            <ContentContainer
                title={"Leaderboard"}
                renderContent={() => (
                    <>
                        <PlayerCardSmall player={player} />
                        <PlayerCardSmall player={player} />
                        <PlayerCardSmall player={player} />
                    </>
                )}
            />
            <ContentContainer
                title={"Registration is open!"}
                renderContent={() => (
                    <>
                        <PlayerCardBig player={player} />
                        <PlayerCardBig player={player} />
                    </>
                )}
            />
            <ContentContainer
                title={"Scoreboard"}
                renderContent={() => (
                    <div
                        className="scoreboard-container"
                        style={{
                            gridTemplateColumns: `repeat(${noOfPlayers}, 1fr)`,
                        }}
                    >
                        <PlayerCardTiny player={player} />
                        <PlayerCardTiny player={player} />
                        <PlayerCardTiny player={player} />
                        <PlayerCardTiny player={player} />
                        <PlayerCardTiny player={player} />
                        <PlayerCardTiny player={player} />
                    </div>
                )}
            />
            <PrimaryButton title={"Next"} path={"/register"} />
            {/* <PlayerCardSmall player={player} /> */}
            {/* <PlayerCardTiny player={player} /> */}
            {/* <PlayerCardBig player={player} /> */}
        </main>
    );
}

export default LandingPage;
