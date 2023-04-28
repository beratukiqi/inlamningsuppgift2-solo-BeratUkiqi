import style from "../styles/components/PlayerCardBig.module.scss";
import InputField from "./InputField";

function PlayerCardBig({ player, bgColor, hasScoreInput }) {
    return (
        <article className={style.playerCardBig}>
            <section
                className={style.playerCardBig__name}
                style={{ backgroundColor: `${bgColor}` }}
            >
                <p>{player.name}</p>
            </section>
            {hasScoreInput ? (
                <InputField type={hasScoreInput ? "number" : "string"} />
            ) : (
                <section className={style.playerCardBig__buttons}>
                    {/* Edit icon */}

                    {/* <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_38_238)">
                        <path
                            d="M13 25C16.3152 25 19.4946 23.683 21.8388 21.3388C24.183 18.9946 25.5 15.8152 25.5 12.5C25.5 9.18479 24.183 6.00537 21.8388 3.66117C19.4946 1.31696 16.3152 0 13 0C9.68479 0 6.50537 1.31696 4.16117 3.66117C1.81696 6.00537 0.5 9.18479 0.5 12.5C0.5 15.8152 1.81696 18.9946 4.16117 21.3388C6.50537 23.683 9.68479 25 13 25ZM17.9707 6.82129L18.6738 7.52441C19.4355 8.28613 19.4355 9.52148 18.6738 10.2881L17.6289 11.333L14.1621 7.86621L15.207 6.82129C15.9688 6.05957 17.2041 6.05957 17.9707 6.82129ZM7.91699 14.1113L13.0537 8.97461L16.5205 12.4414L11.3838 17.5732C11.1836 17.7734 10.9346 17.915 10.6562 17.9834L7.72168 18.7158C7.45312 18.7842 7.1748 18.7061 6.97949 18.5107C6.78418 18.3154 6.70605 18.0371 6.77441 17.7686L7.50684 14.834C7.5752 14.5605 7.7168 14.3066 7.91699 14.1064V14.1113Z"
                            fill="#393939"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_238">
                            <rect
                                width="25"
                                height="25"
                                fill="white"
                                transform="translate(0.5)"
                            />
                        </clipPath>
                    </defs>
                </svg> */}

                    {/* Delete icon */}
                    <svg
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_38_240)">
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
