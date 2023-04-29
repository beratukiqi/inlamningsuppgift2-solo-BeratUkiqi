import style from "../styles/components/PlayerCardSmall.module.scss";
import { useSelector } from "react-redux";

function PlayerCardSmall({ player, dangerZone, bgColor }) {
    const gameSettings = useSelector((state) => state.gameSettings);

    return (
        <article
            className={style.playerCardSmall}
            style={{ backgroundColor: `${bgColor}` }}
        >
            <p>{player.name}</p>
            <p>
                {dangerZone
                    ? gameSettings.maxPoints - player.points + " points left"
                    : player.points}
            </p>
        </article>
    );
}

export default PlayerCardSmall;
