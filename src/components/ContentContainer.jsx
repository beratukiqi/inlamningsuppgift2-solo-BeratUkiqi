import style from "../styles/components/ContentContainer.module.scss";

function ContentContainer({ title, renderContent }) {
    return (
        <section className={style.ContentContainer}>
            <header className={style.ContentContainer__header}>
                <h2>{title}</h2>
                <button>^</button>
            </header>
            {renderContent()}
        </section>
    );
}

export default ContentContainer;
