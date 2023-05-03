import React, { useRef } from "react";
import PlayerCardBig from "./PlayerCardBig";
import { useDispatch, useSelector } from "react-redux";
import { setPointsToAdd } from "../app/playersSlice";

function PlayerRegister({ hasScoreInput, hasEditableNames }) {
    const playerList = useSelector((state) => state.players);
    const inputRefs = playerList.map(() => createRef());
    const dispatch = useDispatch();

    function handleNegativeButton(playerId, i) {
        const inputValue = inputRefs[i].current.value;
        inputRefs[i].current.value = -inputValue;

        dispatch(
            setPointsToAdd({
                playerId: playerId,
                newScore: Number(inputRefs[i].current.value),
            })
        );
    }

    function createRef() {
        return React.createRef();
    }

    return (
        <>
            {playerList.map((player, i) => (
                <>
                    <PlayerCardBig
                        key={player.id}
                        player={player}
                        bgColor={player.bgColor}
                        hasScoreInput={hasScoreInput}
                        hasEditableNames={hasEditableNames}
                        uniqueRef={inputRefs[i]}
                    />
                    <button onClick={() => handleNegativeButton(player.id, i)}>
                        Negative
                    </button>
                </>
            ))}
        </>
    );
}

export default PlayerRegister;
