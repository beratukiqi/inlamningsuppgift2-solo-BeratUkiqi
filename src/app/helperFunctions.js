// saveState function
export const saveState = (state) => {
    try {
        const stateToSave = JSON.stringify(state);
        localStorage.setItem("myAppState", stateToSave);
    } catch (error) {
        console.error("Error while saving state to localStorage:", error);
    }
};

// loadState function
export const loadState = () => {
    try {
        const stateToLoad = localStorage.getItem("myAppState");
        if (stateToLoad === null) {
            return undefined;
        }
        return JSON.parse(stateToLoad);
    } catch (error) {
        console.error("Error while loading state from localStorage:", error);
        return undefined;
    }
};
