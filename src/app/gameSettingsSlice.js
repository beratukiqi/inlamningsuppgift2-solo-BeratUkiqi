import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxPoints: 300,
    noOfPlayers: 2,
};

// skapa vårat slice här
export const gameSettingsSlice = createSlice({
    name: "gameSettings",
    initialState,
    reducers: {
        changeMaxPoints: (state, action) => {
            const { newMaxPoints } = action.payload;
            state.maxPoints = newMaxPoints;
        },
        changeNoOfPlayers: (state, action) => {
            const newNoOfPlayers = action.payload;
            state.noOfPlayers = newNoOfPlayers;
        },
    },
});

// Generar actions från våra reducers
export const { changeMaxPoints, changeNoOfPlayers } = gameSettingsSlice.actions;

// Exportera vår reducer
export default gameSettingsSlice.reducer;
