import { createSlice } from "@reduxjs/toolkit";
const MAX_POINTS = 500;
const initialState = {
    players: [
        {
            id: 1,
            name: "Berat",
            bgColor: "#A5E9B4",
            points: 488, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [116, 174, 288, 488], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            id: 2,
            name: "Dark Helicopter",
            bgColor: "#A5B6E5",
            points: 175, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [46, 92, 110, 175], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            id: 3,
            name: "Lisa",
            bgColor: "#E9E6A5",
            points: 416, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [182, 257, 337, 416], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            id: 4,
            name: "Warrior Boy",
            bgColor: "#E9A5A5",
            points: 74, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [8, -15, 35, 74], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            id: 5,
            name: "Marcus",
            bgColor: "#A5C8E9",
            points: 151, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [71, 53, 121, 151], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            id: 6,
            name: "Philip",
            bgColor: "#E8A5E9",
            points: 75, // Each round point + prev points here
            pointsToAdd: 0,
            pointsHistory: [36, 43, 65, 75], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
    ],
};

// skapa vårat slice här
export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        setPointsToAdd: (state, action) => {
            const { playerId, newScore } = action.payload;
            const playerIndex = state.players.findIndex(
                (player) => player.id === playerId
            );

            if (playerIndex > -1) {
                state.players[playerIndex].pointsToAdd = newScore;
            }
        },

        addPoints: (state) => {
            state.players.forEach((player) => {
                player.points += player.pointsToAdd;
            });
        },
    },
});

// Generar actions från våra reducers
export const { setPointsToAdd, addPoints } = playersSlice.actions;

// Exportera vår reducer
export default playersSlice.reducer;
