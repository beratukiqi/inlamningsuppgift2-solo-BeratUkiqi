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
        <>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                    </>
                )}
            />
            <h1>Players PAGE</h1>
            <Header title={"All players"} subTitle={"Add new players or "} />
            <ContentContainer
                renderContent={() => <PlayerRegister hasEditableNames={true} />}
            />
            <SecondaryButton title={"Add new player"} action={addNewPlayer} />
        </>
    );
}

export default Players;
