import style from "../styles/components/PlayerCardBig.module.scss";
import InputField from "./InputField";
import {
    setPointsToAdd,
    removePlayer,
    changePlayerName,
} from "../app/playersSlice";
import { changeNoOfPlayers } from "../app/gameSettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import MinusButtonIcon from "./icons/MinusButtonIcon";

function PlayerCardBig({ player, bgColor, hasScoreInput, hasEditableNames }) {
    const dispatch = useDispatch();
    const [inputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);
    const gameSettings = useSelector((state) => state.gameSettings);

    const handleShowEdit = () => {
        setInputVisible(true);
    };

    function handleNegativeButton() {
        const inputValue = inputRef.current.value;
        inputRef.current.value = -inputValue;

        dispatch(
            setPointsToAdd({
                playerId: player.id,
                newScore: Number(inputRef.current.value),
            })
        );
    }

    const handleNameChange = (e) => {
        let inputValue = e.target.value;

        if (inputValue === "") {
            inputValue = player.name;
        }
        dispatch(
            changePlayerName({ playerId: player.id, newName: inputValue })
        );
        setInputVisible(false);
    };

    useEffect(() => {
        if (inputVisible) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    const handleInputPoints = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = 0;
        }
        dispatch(
            setPointsToAdd({
                playerId: player.id,
                newScore: parseInt(inputValue),
            })
        );
    };

    const handleDelete = () => {
        dispatch(removePlayer(player.id));
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers - 1));
    };

    return (
        <article className={style.playerCardBig}>
            <section
                onClick={hasEditableNames ? handleShowEdit : null}
                className={style.playerCardBig__name}
                style={{ backgroundColor: `${bgColor}` }}
            >
                <p>{player.name}</p>
            </section>

            {inputVisible && (
                <InputField
                    type={"text"}
                    className={"editNameInput"}
                    onBlur={handleNameChange}
                    ref={inputRef}
                    defaultValue={player.name}
                />
            )}
            {hasScoreInput ? (
                <>
                    <InputField
                        id={player.id}
                        type={hasScoreInput ? "number" : "string"}
                        onBlur={handleInputPoints}
                        ref={inputRef}
                        inputmode={"numeric"}
                        pattern={"[d+-]"}
                    />
                    <MinusButtonIcon
                        onClick={() => handleNegativeButton(player.id)}
                    />
                </>
            ) : (
                <section className={style.playerCardBig__buttons}>
                    {/* Delete icon */}
                    <svg
                        onClick={handleDelete}
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_38_240)">
                            <path
                                d="M13 25C16.3152 25 19.4946 23.683 21.8388 21.3388C24.183 18.9946 25.5 15.8152 25.5 12.5C25.5 9.18479 24.183 6.00537 21.8388 3.66117C19.4946 1.31696 16.3152 0 13 0C9.68479 0 6.50537 1.31696 4.16117 3.66117C1.81696 6.00537 0.5 9.18479 0.5 12.5C0.5 15.8152 1.81696 18.9946 4.16117 21.3388C6.50537 23.683 9.68479 25 13 25ZM9.04492 8.54492C9.50391 8.08594 10.2461 8.08594 10.7002 8.54492L12.9951 10.8398L15.29 8.54492C15.749 8.08594 16.4912 8.08594 16.9453 8.54492C17.3994 9.00391 17.4043 9.74609 16.9453 10.2002L14.6504 12.4951L16.9453 14.79C17.4043 15.249 17.4043 15.9912 16.9453 16.4453C16.4863 16.8994 15.7441 16.9043 15.29 16.4453L12.9951 14.1504L10.7002 16.4453C10.2412 16.9043 9.49902 16.9043 9.04492 16.4453C8.59082 15.9863 8.58594 15.2441 9.04492 14.79L11.3398 12.4951L9.04492 10.2002C8.58594 9.74121 8.58594 8.99902 9.04492 8.54492Z"
                                fill="#BE3131"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_38_240">
                                <rect
                                    width="25"
                                    height="25"
                                    fill="white"
                                    transform="translate(0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </section>
            )}
        </article>
    );
}

export default PlayerCardBig;
