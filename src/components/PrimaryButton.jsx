import { useNavigate } from "react-router-dom";

function PrimaryButton({ path, title, action }) {
    const navigate = useNavigate();

    const handleClick = () => {
        action && action(); // Updates the state from before going to next page
        navigate(path); // Navigates to the next page
    };

    return <button onClick={handleClick}>{title}</button>;
}

export default PrimaryButton;
