import style from "../styles/components/ContentContainer.module.scss";

function ContentContainer({ title, renderContent }) {
    return (
        <section className={style.ContentContainer}>
            <header className={style.ContentContainer__header}>
                <h2>{title}</h2>
                <svg
                    width="13"
                    height="5"
                    viewBox="0 0 13 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4L6.37778 1L1 4"
                        stroke="#393939"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </header>
            {renderContent && renderContent()}
        </section>
    );
}

export default ContentContainer;
