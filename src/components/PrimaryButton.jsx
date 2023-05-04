import { useNavigate } from "react-router-dom";
import style from "../styles/components/PrimaryButton.module.scss";

function PrimaryButton({ path, title, action, icon, className }) {
    const navigate = useNavigate();

    const handleClick = () => {
        action && action(); // Runs the passed action function if provided
        path && navigate(path); // Navigates to the passed path if provided
    };

    return (
        <button
            className={className ? className : style.PrimaryButton} // Can take unique classNames from props, else default styling.
            onClick={handleClick}
        >
            {title}
            {icon && icon}
        </button>
    );
}

export default PrimaryButton;
