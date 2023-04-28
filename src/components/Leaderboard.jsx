import PlayerCardSmall from "./PlayerCardSmall";

function Leaderboard() {
    const MAX_POINTS = 500;

    const playerList = [
        {
            name: "Berat",
            points: 490, // Each round point + prev points here
            pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Lisa",
            points: 51, // Each round point + prev points here
            pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
    ];

    return (
        <>
            {playerList
                .sort((a, b) => b.pointsLeft - a.pointsLeft)
                .map((player, i) => (
                    <PlayerCardSmall player={player} key={i} />
                ))}
        </>
    );
}

export default Leaderboard;
