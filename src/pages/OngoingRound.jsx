import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import Leaderboard from "../components/Leaderboard";
import PrimaryButton from "../components/PrimaryButton";
import GameRulesIcon from "../components/icons/GameRulesIcon";
import StartingPlayer from "../components/StartingPlayer";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import ContentContainer from "../components/ContentContainer";
import PlayingCardsIcon from "../components/icons/PlayingCardsIcon";
import style from "../styles/pages/OngoingRound.module.scss";

function OngoingRound() {
    const navigate = useNavigate();

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                        <GameRulesIcon onClick={() => navigate("/rules")} />
                    </>
                )}
            />
            <main className={style.contentWrapper}>
                <Header
                    title={"The game is underway, good luck! "}
                    subTitle={
                        "When the round is over, click the button at the bottom to continue."
                    }
                />

                <PlayingCardsIcon />

                <ContentContainer
                    title={"Leaderboard"}
                    renderContent={() => <Leaderboard />}
                />

                <ContentContainer
                    title={"Starting player is:"}
                    renderContent={() => <StartingPlayer />}
                />

                <PrimaryButton
                    title={"Round is over"}
                    path={"/finished-round"}
                />
            </main>
        </section>
    );
}

export default OngoingRound;
