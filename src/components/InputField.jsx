import { useState } from "react";

function InputField({ type, defaultValue }) {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const invalidChars = ["e", ".", ",", "+"];

    return (
        <input
            className="inputFieldBig"
            type={type}
            defaultValue={defaultValue}
            onChange={(e) => handleInput(e)}
            onBlur={(e) => handleInput(e)}
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
