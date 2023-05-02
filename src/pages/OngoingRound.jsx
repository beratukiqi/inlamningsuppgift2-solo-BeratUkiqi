import ContentContainer from "../components/ContentContainer";
import StartingPlayer from "../components/StartingPlayer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import Leaderboard from "../components/Leaderboard";
import HeaderMenu from "../components/HeaderMenu";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import PlayingCardsIcon from "../components/icons/PlayingCardsIcon";
import GameSettingsIcon from "../components/icons/GameSettingsIcon";
import { useNavigate } from "react-router-dom";
import style from "../styles/pages/OngoingRound.module.scss";

function OngoingRound() {
    const navigate = useNavigate();
    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                        <GameSettingsIcon onClick={() => navigate("/rules")} />
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
