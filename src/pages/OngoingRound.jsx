import ContentContainer from "../components/ContentContainer";
import StartingPlayer from "../components/StartingPlayer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import Leaderboard from "../components/Leaderboard";

function OngoingRound() {
    return (
        <main>
            <Header
                title={"The game is underway, good luck! "}
                subTitle={
                    "When the round is over, click the button at the bottom to continue."
                }
            />
            <ContentContainer
                title={"Leaderboard"}
                renderContent={() => <Leaderboard />}
            />

            <ContentContainer
                title={"Starting player is:"}
                renderContent={() => <StartingPlayer />}
            />

            <PrimaryButton title={"Round is over"} path={"/finished-round"} />
        </main>
    );
}

export default OngoingRound;
