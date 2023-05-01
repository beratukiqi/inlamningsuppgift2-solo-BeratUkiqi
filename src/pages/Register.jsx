import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import PlayerRegister from "../components/PlayerRegister";
import { changeNoOfPlayers } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HeaderMenu from "../components/HeaderMenu";

function Register() {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);
    const addNewPlayer = () => {
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers + 1));

        const newPlayer = {
            id: "Player " + (gameSettings.noOfPlayers + 1),
            name: "Player " + (gameSettings.noOfPlayers + 1),
            bgColor: "#A5E9B4",
            points: 0,
            pointsToAdd: 0,
            pointsHistory: [],
        };

        dispatch(generatePlayer(newPlayer));
    };
    return (
        <>
            <HeaderMenu />
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
                <SecondaryButton
                    title={"Add new player"}
                    action={addNewPlayer}
                />
                <PrimaryButton title={"Players are ready"} path={"/overview"} />
            </main>
        </>
    );
}

export default Register;
