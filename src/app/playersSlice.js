import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Berat",
        bgColor: "#A5E9B4",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
    {
        id: 2,
        name: "Dark Helicopter",
        bgColor: "#A5B6E5",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
    {
        id: 3,
        name: "Lisa",
        bgColor: "#E9E6A5",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
    {
        id: 4,
        name: "Warrior Boy",
        bgColor: "#E9A5A5",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
    {
        id: 5,
        name: "Marcus",
        bgColor: "#A5C8E9",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
    {
        id: 6,
        name: "Philip",
        bgColor: "#E8A5E9",
        points: 0, // Each round point + prev points here
        pointsToAdd: 0,
        pointsHistory: [0], // Each rounds points are added here
    },
];

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
    },
});

// Generar actions från våra reducers
export const { setPointsToAdd, addPoints } = playersSlice.actions;

// Exportera vår reducer
export default playersSlice.reducer;
