import PlayerCardSmall from "./PlayerCardSmall";
import { useSelector } from "react-redux";

function StartingPlayer() {
    const playerList = useSelector((state) => state.players);
    const startingPlayer = [...playerList].sort(
        (a, b) => a.pointsLeft - b.pointsLeft
    )[0];

    return (
        <PlayerCardSmall
            player={startingPlayer}
            bgColor={startingPlayer.bgColor}
        />
    );
}

export default StartingPlayer;
