import { createSlice } from "@reduxjs/toolkit";
const MAX_POINTS = 500;
const initialState = {
    players: [
        {
            name: "Berat",
            bgColor: "#A5E9B4",
            points: 488, // Each round point + prev points here
            pointsHistory: [116, 174, 288, 488], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Dark Helicopter",
            bgColor: "#A5B6E5",
            points: 175, // Each round point + prev points here
            pointsHistory: [46, 92, 110, 175], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Lisa",
            bgColor: "#E9E6A5",
            points: 416, // Each round point + prev points here
            pointsHistory: [182, 257, 337, 416], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Warrior Boy",
            bgColor: "#E9A5A5",
            points: 74, // Each round point + prev points here
            pointsHistory: [8, -15, 35, 74], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Marcus",
            bgColor: "#A5C8E9",
            points: 151, // Each round point + prev points here
            pointsHistory: [71, 53, 121, 151], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Philip",
            bgColor: "#E8A5E9",
            points: 75, // Each round point + prev points here
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
        addPlayer: (state, action) => {
            let id = state.players.length + 1;
            let newPlayer = { ...action.payload, id: id };
            state.players.push(newPlayer);
        },

        addPoints: (state, action) => {
            //
            state.players.push(action.payload);
        },

        addPointsToScoreboard: (state, action) => {
            let id = state.readBooks.findIndex(
                (book) => book.id === action.payload.id
            );
            state.players.splice(id, 1);
        },

        removePlayer: (state) => {
            state.players;
        },
    },
});

// Generar actions från våra reducers
export const { addPlayer, addPoints, addPointsToScoreboard } =
    playersSlice.actions;

// Exportera vår reducer
export default playersSlice.reducer;
