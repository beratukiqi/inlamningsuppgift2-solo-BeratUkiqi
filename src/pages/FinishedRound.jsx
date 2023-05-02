import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PlayerRegister from "../components/PlayerRegister";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch } from "react-redux";
import { addPoints } from "../app/playersSlice";
import HeaderMenu from "../components/HeaderMenu";
import { useNavigate } from "react-router-dom";
import BackButtonIcon from "../components/icons/BackButtonIcon";

function FinishedRound() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(addPoints());
    };
    return (
        <>
            <HeaderMenu
                renderContent={() => (
                    <BackButtonIcon onClick={() => navigate(-1)} />
                )}
            />
            <main>
                <Header
                    title={"Round is over, count your points!"}
                    subTitle={"Beware of the not so talented mathematicians."}
                />
                <ContentContainer
                    title={"Add the player points"}
                    renderContent={() => (
                        <PlayerRegister hasScoreInput={true} />
                    )}
                />
                <PrimaryButton
                    action={handleClick}
                    title={"Save points"}
                    path={"/overview"}
                />
            </main>
        </>
    );
}

export default FinishedRound;
