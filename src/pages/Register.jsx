import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import PlayerRegister from "../components/PlayerRegister";

function Register() {
    return (
        <main>
            <Header
                title={"You have been given superhero names! "}
                subTitle={
                    "If you wish to change names click on the name or the edit button"
                }
            />
            <ContentContainer
                title={"Registration is open!"}
                renderContent={() => <PlayerRegister />}
            />
            <SecondaryButton title={"Add new player"} />
            <PrimaryButton title={"Players are ready"} path={"/overview"} />
        </main>
    );
}

export default Register;
