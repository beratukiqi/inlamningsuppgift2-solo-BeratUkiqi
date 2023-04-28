import { useDispatch } from "react-redux";
import { setPointsToAdd } from "../app/playersSlice";

function InputField({ type, defaultValue, id }) {
    const dispatch = useDispatch();

    const handleScoreChange = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = 0;
        }
        const newScore = parseInt(inputValue);
        if (newScore === NaN) {
        }
        dispatch(setPointsToAdd({ playerId: id, newScore: newScore }));
    };
    const invalidChars = ["e", ".", ",", "+"];

    return (
        <input
            id={id}
            className="inputFieldBig"
            type={type}
            defaultValue={defaultValue}
            onBlur={handleScoreChange}
            onKeyDown={(e) => {
                // Handles unwanted symbols for player score input
                if (type === "number" && invalidChars.includes(e.key)) {
                    e.preventDefault();
                }
            }}
        />
    );
}

export default InputField;
