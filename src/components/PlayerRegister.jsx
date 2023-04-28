import PlayerCardBig from "./PlayerCardBig";
import { useSelector } from "react-redux";

function PlayerRegister({ hasScoreInput }) {
    const playerList = useSelector((state) => state.players);
    return (
        <>
            {playerList.map((player) => (
                <PlayerCardBig
                    key={player.id}
                    player={player}
                    bgColor={player.bgColor}
                    hasScoreInput={hasScoreInput}
                />
            ))}
        </>
    );
}

export default PlayerRegister;
