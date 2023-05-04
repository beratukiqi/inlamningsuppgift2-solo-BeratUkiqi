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
        resetToInitialState: (state, action) => {
            state.noOfPlayers = initialState.noOfPlayers;
            state.maxPoints = initialState.maxPoints;
        },
    },
});

export const { changeMaxPoints, changeNoOfPlayers, resetToInitialState } =
    gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
