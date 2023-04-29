import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playersSlice";
import gameSettingsReducer from "./gameSettingsSlice";

export const store = configureStore({
    reducer: {
        players: playersReducer,
        gameSettings: gameSettingsReducer,
    },
});
