import style from "../styles/components/PlayerCardSmall.module.scss";

function PlayerCardSmall({ player, dangerZone }) {
    return (
        <article className={style.playerCardSmall}>
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
