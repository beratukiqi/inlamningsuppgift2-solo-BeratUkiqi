import { forwardRef } from "react";

function InputField(props, ref) {
    const { type, defaultValue, id, onBlur, className, pattern, inputmode } =
        props;
    const invalidChars = ["e", ".", ",", "+"];

    return (
        <input
            id={id}
            className={className ? className : "inputFieldBig"}
            type={type}
            defaultValue={defaultValue}
            onBlur={(e) => onBlur(e)}
            onKeyDown={(e) => {
                // Handles unwanted symbols for player score input
                if (type === "number" && invalidChars.includes(e.key)) {
                    e.preventDefault();
                }

                if (e.key === "Enter") {
                    e.target.blur();
                }
            }}
            ref={ref}
            pattern={pattern}
            inputMode={inputmode}
        />
    );
}

export default forwardRef(InputField);
