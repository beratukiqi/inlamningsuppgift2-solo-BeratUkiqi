import PlayerCardSmall from "./PlayerCardSmall";

function Leaderboard() {
    const player = {
        name: "Berat",
        points: 414, // Each round point + prev points here
        pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
    };

    return (
        <>
            <PlayerCardSmall player={player} />
            <PlayerCardSmall player={player} />
            <PlayerCardSmall player={player} />
        </>
    );
}

export default Leaderboard;
