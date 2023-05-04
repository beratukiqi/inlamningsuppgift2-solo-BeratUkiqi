import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxPoints: 300,
    noOfPlayers: 2,
};

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

export const { changeMaxPoints, changeNoOfPlayers } = gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
