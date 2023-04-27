import style from "../styles/components/PlayerCardBig.module.scss";

function PlayerCardBig({ player }) {
    return (
        <article className={style.playerCardBig}>
            <section className={style.playerCardBig__name}>
                <p>{player.name}</p>
            </section>
            <section className={style.playerCardBig__buttons}>
                <button>Edit</button>
                <button>Remove</button>
            </section>
        </article>
    );
}

export default PlayerCardBig;
