import style from "../styles/components/PlayerCardSmall.module.scss";
import { useSelector } from "react-redux";

function PlayerCardSmall({ player, dangerZone, bgColor }) {
    const gameSettings = useSelector((state) => state.gameSettings);
    const hasPassedMAX = gameSettings.maxPoints - player.points <= 0;

    return (
        <article
            className={style.playerCardSmall}
            style={{ backgroundColor: hasPassedMAX ? "#ff3f3f" : `${bgColor}` }}
        >
            <p>{player.name}</p>
            <p>
                {dangerZone
                    ? gameSettings.maxPoints - player.points <= 0
                        ? Math.abs(gameSettings.maxPoints - player.points) +
                          " points above"
                        : gameSettings.maxPoints -
                          player.points +
                          " points left"
                    : player.points}
            </p>
        </article>
    );
}

export default PlayerCardSmall;
