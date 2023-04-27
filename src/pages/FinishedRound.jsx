import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

function FinishedRound() {
    return (
        <main>
            <Header
                title={"Round is over, count your points!"}
                subTitle={"Beware of the not so talented mathematicians."}
            />
            <ContentContainer />
            <PrimaryButton title={"Save points"} path={"/overview"} />
        </main>
    );
}

export default FinishedRound;
