import ContentContainer from "../components/ContentContainer";
import StartingPlayer from "../components/StartingPlayer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import Leaderboard from "../components/Leaderboard";
import HeaderMenu from "../components/HeaderMenu";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import { useNavigate } from "react-router-dom";

function OngoingRound() {
    const navigate = useNavigate();
    return (
        <>
            <HeaderMenu
                renderContent={() => (
                    <BackButtonIcon onClick={() => navigate(-1)} />
                )}
            />
            <main>
                <Header
                    title={"The game is underway, good luck! "}
                    subTitle={
                        "When the round is over, click the button at the bottom to continue."
                    }
                />
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
        </>
    );
}

export default OngoingRound;
