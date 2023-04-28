import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PlayerRegister from "../components/PlayerRegister";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch } from "react-redux";
import { addPoints } from "../app/playersSlice";
function FinishedRound() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addPoints());
    };
    return (
        <main>
            <Header
                title={"Round is over, count your points!"}
                subTitle={"Beware of the not so talented mathematicians."}
            />
            <ContentContainer
                title={"Add the player points"}
                renderContent={() => <PlayerRegister hasScoreInput={true} />}
            />
            <PrimaryButton
                action={handleClick}
                title={"Save points"}
                path={"/overview"}
            />
        </main>
    );
}

export default FinishedRound;
