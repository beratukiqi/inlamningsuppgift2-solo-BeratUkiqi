import style from "../styles/components/PlayerCardSmall.module.scss";

function PlayerCardSmall({ player, dangerZone, bgColor }) {
    return (
        <article
            className={style.playerCardSmall}
            style={{ backgroundColor: `${bgColor}` }}
        >
            <p>{player.name}</p>
            <p>
                {dangerZone
                    ? player.pointsLeft + " points left"
                    : player.points}
            </p>
        </article>
    );
}

export default PlayerCardSmall;
