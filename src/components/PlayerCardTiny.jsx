import { useState, useEffect, useRef } from "react";
import style from "../styles/components/PlayerCardTiny.module.scss";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { editPoints } from "../app/playersSlice";

function PlayerCardTiny({ player, bgColor }) {
    const playerInitials = player.name[0] + player.name[1];
    const [inputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        setInputVisible(true);
    };

    const handleInput = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = player.points;
        }
        const newScore = parseInt(inputValue);

        dispatch(editPoints({ playerId: player.id, newScore: newScore }));
        setInputVisible(false);
    };

    useEffect(() => {
        if (inputVisible) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    return (
        <article className={style.playerCardTiny}>
            <p
                className={style.playerCardTiny__initials}
                style={{ backgroundColor: `${bgColor}` }}
            >
                {playerInitials}
            </p>
            {player.pointsHistory.length < 1 ? (
                <p className={style.playerCardTiny__point}>{player.points}</p>
            ) : (
                player.pointsHistory.map((point, i) => {
                    const isLastElement = i === player.pointsHistory.length - 1;

                    return (
                        <>
                            {inputVisible && isLastElement && (
                                <InputField
                                    className={"tinyEditPointInput"}
                                    type="number"
                                    ref={inputRef}
                                    defaultValue={player.points}
                                    onBlur={handleInput}
                                />
                            )}
                            <p
                                className={style.playerCardTiny__point}
                                onClick={isLastElement ? handleClick : null}
                            >
                                {point}
                            </p>
                        </>
                    );
                })
            )}
        </article>
    );
}

export default PlayerCardTiny;
