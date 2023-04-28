import PlayerCardBig from "./PlayerCardBig";
import { useSelector } from "react-redux";

function PlayerRegister({ hasScoreInput, inputType }) {
    const playerList = useSelector((state) => state.players);
    return (
        <>
            {playerList.map((player, i) => (
                <PlayerCardBig
                    key={i}
                    player={player}
                    bgColor={player.bgColor}
                    hasScoreInput={hasScoreInput}
                />
            ))}
        </>
    );
}

export default PlayerRegister;
