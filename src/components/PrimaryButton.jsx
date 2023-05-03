import style from "../styles/components/PrimaryButton.module.scss";

import { useNavigate } from "react-router-dom";

function PrimaryButton({ path, title, action, icon, className }) {
    const navigate = useNavigate();

    const handleClick = () => {
        action && action(); // Updates the state from before going to next page
        path && navigate(path); // Navigates to the next page
    };

    return (
        <button
            className={className ? className : style.PrimaryButton}
            onClick={handleClick}
        >
            {title}
            {icon && icon}
        </button>
    );
}

export default PrimaryButton;
