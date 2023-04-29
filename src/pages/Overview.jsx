import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import Leaderboard from "../components/Leaderboard";
import ScoreBoard from "../components/ScoreBoard";
import PlayerCardSmall from "../components/PlayerCardSmall";
import { useSelector } from "react-redux";
import StartingPlayer from "../components/StartingPlayer";

function Overview() {
    const playerList = useSelector((state) => state.players);
    const gameSettings = useSelector((state) => state.gameSettings);

    return (
        <main>
            <Header
                title={"Game overview!"}
                subTitle={
                    "Keep track of who is in the lead and who to target together! "
                }
            />
            <ContentContainer
                title={"Leaderboard"}
                renderContent={() => <Leaderboard />}
            />

            <ContentContainer
                title={"Scoreboard"}
                renderContent={() => <ScoreBoard />}
            />
            <ContentContainer
                title={"Danger Zone!"}
                renderContent={
                    () => {
                        const playersInDangerZone = playerList
                            .filter(
                                (player) =>
                                    gameSettings.maxPoints - player.points <=
                                    100
                            )
                            .sort((a, b) => b.points - a.points);
                        return playersInDangerZone.length > 0 ? (
                            playersInDangerZone.map((player, i) => (
                                <PlayerCardSmall
                                    key={i}
                                    player={player}
                                    dangerZone={true}
                                    bgColor={player.bgColor}
                                />
                            ))
                        ) : (
                            <p>No player in danger...for now</p>
                        );
                    }
                    // Renders players with < 100 points left in asc order
                }
            />
            <ContentContainer
                title={"Starting player:"}
                renderContent={() => <StartingPlayer />}
            />
            <PrimaryButton title={"Start a round"} path={"/ongoing-round"} />
        </main>
    );
}

export default Overview;
