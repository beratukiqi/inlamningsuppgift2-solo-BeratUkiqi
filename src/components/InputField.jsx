function InputField({ type, defaultValue, id, onBlur }) {
    const invalidChars = ["e", ".", ",", "+"];

    return (
        <input
            id={id}
            className="inputFieldBig"
            type={type}
            defaultValue={defaultValue}
            onBlur={onBlur}
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
