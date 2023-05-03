import React, { useRef } from "react";
import PlayerCardBig from "./PlayerCardBig";
import { useDispatch, useSelector } from "react-redux";
import { setPointsToAdd } from "../app/playersSlice";

function PlayerRegister({ hasScoreInput, hasEditableNames }) {
    const playerList = useSelector((state) => state.players);

    return (
        <>
            {playerList.map((player) => (
                <>
                    <PlayerCardBig
                        key={player.id}
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
