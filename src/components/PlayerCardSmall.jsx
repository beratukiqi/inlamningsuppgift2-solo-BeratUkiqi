import style from "../styles/components/PlayerCardSmall.module.scss";

function PlayerCardSmall({ player }) {
    return (
        <article className={style.playerCardSmall}>
            <p>{player.name}</p>
            <p>{player.points}</p>
        </article>
    );
}

export default PlayerCardSmall;
