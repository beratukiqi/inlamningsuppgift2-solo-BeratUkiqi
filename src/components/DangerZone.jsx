import { useSelector } from "react-redux";
import PlayerCardSmall from "./PlayerCardSmall";

function DangerZone() {
    const playerList = useSelector((state) => state.players);
    const gameSettings = useSelector((state) => state.gameSettings);
    console.log("playerList:", playerList);
    console.log("gameSettings:", gameSettings);

    const playersInDangerZone = playerList
        .filter((player) => gameSettings.maxPoints - player.points <= 100)
        .sort((a, b) => b.points - a.points);

    return playersInDangerZone.length > 0 ? (
        <>
            {playersInDangerZone.map((player, i) => (
                <PlayerCardSmall
                    key={i}
                    player={player}
                    dangerZone={true}
                    bgColor={player.bgColor}
                />
            ))}
        </>
    ) : (
        <>
            <p>No player in danger...for now</p>
        </>
    );
}

export default DangerZone;
