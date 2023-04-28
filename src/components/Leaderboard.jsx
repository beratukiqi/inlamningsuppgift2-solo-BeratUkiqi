import PlayerCardSmall from "./PlayerCardSmall";
import { useSelector } from "react-redux";

function Leaderboard() {
    const playerList = useSelector((state) => state.players);
    return (
        <>
            {[...playerList]
                .sort((a, b) => b.pointsLeft - a.pointsLeft)
                .map((player, i) => (
                    <PlayerCardSmall
                        key={i}
                        player={player}
                        bgColor={player.bgColor}
                    />
                ))}
        </>
    );
}

export default Leaderboard;
