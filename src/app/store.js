import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playersSlice";
import gameSettingsReducer from "./gameSettingsSlice";
import { saveState, loadState } from "./helperFunctions";

const loadedState = loadState();

export const store = configureStore({
    reducer: {
        players: playersReducer,
        gameSettings: gameSettingsReducer,
    },
    preloadedState: loadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
