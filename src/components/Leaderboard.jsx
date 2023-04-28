import PlayerCardSmall from "./PlayerCardSmall";

function Leaderboard() {
    const MAX_POINTS = 500;

    const playerList = [
        {
            name: "Berat",
            bgColor: "#A5E9B4",
            points: 490, // Each round point + prev points here
            pointsHistory: [0, 66, 216, 490], // Each rounds points are added here
            get pointsLeft() {
                return MAX_POINTS - this.points;
            },
        },
        {
            name: "Lisa",
            bgColor: "#E9E6A5",
            points: 51, // Each round point + prev points here
            pointsHistory: [4, 15, 25, 51], // Each rounds points are added here
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
                    <PlayerCardSmall
                        key={i}
                        player={player}
                        bgColor={player.bgColor}
                    />
                ))}
        </>
    );
}

export default Leaderboard;
