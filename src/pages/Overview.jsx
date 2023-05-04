import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import ScoreBoard from "../components/ScoreBoard";
import DangerZone from "../components/DangerZone";
import PlayersIcon from "../components/icons/PlayersIcon";
import Leaderboard from "../components/Leaderboard";
import PrimaryButton from "../components/PrimaryButton";
import GameRulesIcon from "../components/icons/GameRulesIcon";
import StartingPlayer from "../components/StartingPlayer";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/Overview.module.scss";

function Overview() {
    const navigate = useNavigate();
    const gameSettings = useSelector((state) => state.gameSettings);

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <PlayersIcon onClick={() => navigate("/players")} />
                        <GameRulesIcon onClick={() => navigate("/rules")} />
                    </>
                )}
            />
            <main className={style.contentWrapper}>
                <Header
                    title={"Game overview!"}
                    subTitle={
                        "Keep track of who is in the lead and who to target together! "
                    }
                />

                <h2>Max points: {gameSettings.maxPoints}</h2>

                <ContentContainer
                    title={"Leaderboard"}
                    renderContent={() => <Leaderboard />}
                />

                <ContentContainer
                    title={"Scoreboard"}
                    renderContent={() => <ScoreBoard />}
                />

                <ContentContainer
                    title={"Danger Zone!"}
                    renderContent={
                        () => <DangerZone />
                        // Renders players with < 100 points left in asc order
                    }
                />

                <ContentContainer
                    title={"Starting player:"}
                    renderContent={() => <StartingPlayer />}
                />

                <PrimaryButton
                    title={"Start a round"}
                    path={"/ongoing-round"}
                />
            </main>
        </section>
    );
}

export default Overview;
