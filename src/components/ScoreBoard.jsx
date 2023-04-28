import PlayerCardTiny from "./PlayerCardTiny";

function ScoreBoard() {
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
        {
            name: "Lisa",
            bgColor: "#E9E6A5",
            points: 51, // Each round point + prev points here
            pointsHistory: [4, 15, 25, 51], // Each rounds points are added here
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
        {
            name: "Lisa",
            bgColor: "#E9E6A5",
            points: 51, // Each round point + prev points here
            pointsHistory: [4, 15, 25, 51], // Each rounds points are added here
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

    const noOfPlayers = playerList.length;

    return (
        <section
            className="scoreboard-container"
            style={{
                gridTemplateColumns: `repeat(${noOfPlayers}, 3rem)`,
            }}
        >
            {playerList.map((player, i) => (
                <PlayerCardTiny
                    key={i}
                    player={player}
                    bgColor={player.bgColor}
                />
            ))}
        </section>
    );
}

export default ScoreBoard;
