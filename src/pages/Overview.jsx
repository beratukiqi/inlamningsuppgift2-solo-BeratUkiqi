import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

function Overview() {
    return (
        <main>
            <Header
                title={"Game overview!"}
                subTitle={
                    "Keep track of who is in the lead and who to target together! "
                }
            />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <PrimaryButton title={"Start a round"} path={"/ongoing-round"} />
        </main>
    );
}

export default Overview;
