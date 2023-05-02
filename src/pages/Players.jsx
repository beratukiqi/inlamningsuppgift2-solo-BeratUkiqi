import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import PlayerRegister from "../components/PlayerRegister";
import SecondaryButton from "../components/SecondaryButton";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import CloseButtonIcon from "../components/icons/CloseButtonIcon";
import { changeNoOfPlayers } from "../app/gameSettingsSlice";
import { generatePlayer } from "../app/playersSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderMenu from "../components/HeaderMenu";
import { useNavigate } from "react-router-dom";
import style from "../styles/pages/Players.module.scss";

function Players() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                    </>
                )}
            />
            <main className={style.contentWrapper}>
                <Header
                    title={"All players!"}
                    subTitle={
                        "You can easily change the list of players.  remove the weak ones! "
                    }
                />
                <ContentContainer
                    title={"Currently playing"}
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
            </main>
        </section>
    );
}

export default Players;
