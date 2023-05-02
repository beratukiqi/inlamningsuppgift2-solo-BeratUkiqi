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
import style from "../styles/pages/Register.module.scss";
import { colorData } from "../app/colorData";

function Register() {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);
    const addNewPlayer = () => {
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers + 1));

        let colorList = colorData;

        const generateColor = () => {
            let chosenIndex = gameSettings.noOfPlayers;
            return colorList[chosenIndex];
        };

        const newPlayer = {
            id: "Player " + (gameSettings.noOfPlayers + 1),
            name: "Player " + (gameSettings.noOfPlayers + 1),
            bgColor: generateColor(),
            points: 0,
            pointsToAdd: 0,
            pointsHistory: [],
        };

        dispatch(generatePlayer(newPlayer));
    };
    return (
        <section className={style.pageContainer}>
            <HeaderMenu />
            <main className={style.contentWrapper}>
                <Header
                    title={"You have been given superhero names! "}
                    subTitle={
                        "If you are not feeling like superheroes, change the names by clicking on a player"
                    }
                />
                <ContentContainer
                    title={"Registration is open!"}
                    renderContent={() => (
                        <>
                            <PlayerRegister hasEditableNames={true} />
                            <SecondaryButton
                                title={"Add another player"}
                                action={addNewPlayer}
                            />
                        </>
                    )}
                />

                <PrimaryButton title={"Players are ready"} path={"/overview"} />
            </main>
        </section>
    );
}

export default Register;
