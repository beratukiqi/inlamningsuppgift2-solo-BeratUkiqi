import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

function OngoingRound() {
    return (
        <main>
            <Header
                title={"The game is underway, good luck! "}
                subTitle={
                    "When the round is over, click the button at the bottom to continue."
                }
            />
            <ContentContainer />
            <ContentContainer />
            <PrimaryButton title={"Round is over"} path={"/finished-round"} />
        </main>
    );
}

export default OngoingRound;
