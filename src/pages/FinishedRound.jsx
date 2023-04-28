import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PlayerRegister from "../components/PlayerRegister";
import PrimaryButton from "../components/PrimaryButton";

function FinishedRound() {
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
            <PrimaryButton title={"Save points"} path={"/overview"} />
        </main>
    );
}

export default FinishedRound;
