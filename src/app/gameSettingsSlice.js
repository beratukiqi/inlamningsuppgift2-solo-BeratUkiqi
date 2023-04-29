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
    },
});

// Generar actions från våra reducers
export const { changeMaxPoints } = gameSettingsSlice.actions;

// Exportera vår reducer
export default gameSettingsSlice.reducer;
