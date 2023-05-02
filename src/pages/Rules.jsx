import { useNavigate } from "react-router-dom";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import CloseButtonIcon from "../components/icons/CloseButtonIcon";
import HeaderMenu from "../components/HeaderMenu";

function Rules() {
    const navigate = useNavigate();

    return (
        <>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <BackButtonIcon onClick={() => navigate(-1)} />
                    </>
                )}
            />
            <h1>RULES PAGE</h1>
        </>
    );
}

export default Rules;
