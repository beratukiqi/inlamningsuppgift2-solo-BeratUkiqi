import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PrimaryButton from "../components/PrimaryButton";

function LandingPage() {
    return (
        <main>
            <Header title={"Let’s set up some things before we start!"} />
            <ContentContainer />
            <ContentContainer />
            <PrimaryButton title={"Next"} path={"/register"} />
        </main>
    );
}

export default LandingPage;
