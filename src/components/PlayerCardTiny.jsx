import style from "../styles/components/PlayerCardTiny.module.scss";

function PlayerCardTiny({ player }) {
    const playerInitials = player.name[0] + player.name[1];
    return (
        <article className={style.playerCardTiny}>
            <p className={style.playerCardTiny__initials}>{playerInitials}</p>
            {player.pointsHistory.map((point, i) => {
                return (
                    <p className={style.playerCardTiny__point} key={i}>
                        {point}
                    </p>
                );
            })}
        </article>
    );
}

export default PlayerCardTiny;
