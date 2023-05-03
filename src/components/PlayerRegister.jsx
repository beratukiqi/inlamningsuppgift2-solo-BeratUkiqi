import PlayerCardBig from "./PlayerCardBig";
import { useSelector } from "react-redux";

function PlayerRegister({ hasScoreInput, hasEditableNames }) {
    const playerList = useSelector((state) => state.players);

    return (
        <>
            {playerList.map((player, i) => (
                <>
                    <PlayerCardBig
                        key={player.id + i}
                        player={player}
                        bgColor={player.bgColor}
                        hasScoreInput={hasScoreInput}
                        hasEditableNames={hasEditableNames}
                    />
                </>
            ))}
        </>
    );
}

export default PlayerRegister;
