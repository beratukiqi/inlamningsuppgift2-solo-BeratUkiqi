import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = [];

// skapa vårat slice här
export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        setPointsToAdd: (state, action) => {
            const { playerId, newScore } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );

            if (playerIndex > -1) {
                state[playerIndex].pointsToAdd = newScore;
            }
        },

        addPoints: (state) => {
            state.forEach((player) => {
                let newTotal = player.points + player.pointsToAdd;
                player.points = newTotal;
                player.pointsHistory.push(newTotal);
                player.pointsToAdd = 0;
            });
        },

        editPoints: (state, action) => {
            const { playerId, newScore } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            const lastPointIndex = state[playerIndex].pointsHistory.length;

            if (playerIndex > -1) {
                state[playerIndex].pointsHistory[lastPointIndex - 1] = newScore;
                state[playerIndex].points = newScore;
            }
            console.log(
                state[playerIndex].pointsHistory[lastPointIndex - 1],
                "Targeted thing to change"
            );
        },

        generatePlayer: (state, action) => {
            const newPlayer = action.payload;
            state.push(newPlayer);
        },

        removePlayer: (state, action) => {
            const playerId = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            state.splice(playerIndex, 1);
        },

        shufflePlayerList: (state, action) => {
            // Clone the state and assign the shuffled players array
            return [...action.payload];
        },

        changePlayerName: (state, action) => {
            const { playerId, newName } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            console.log(state[playerIndex].name, "Name before edit");
            if (playerIndex > -1) {
                state[playerIndex].name = newName;
            }
            console.log(state[playerIndex].name, "Name after edit");
        },
    },
});

// Generar actions från våra reducers
export const {
    setPointsToAdd,
    addPoints,
    generatePlayer,
    removePlayer,
    changePlayerName,
    editPoints,
    shufflePlayerList,
} = playersSlice.actions;

// Exportera vår reducer
export default playersSlice.reducer;
