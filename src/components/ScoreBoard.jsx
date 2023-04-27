import PlayerCardTiny from "./PlayerCardTiny";

function ScoreBoard() {
    const player = {
        name: "Berat",
        points: 414, // Each round point + prev points here
        pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
    };

    const noOfPlayers = 6;

    return (
        <section
            className="scoreboard-container"
            style={{
                gridTemplateColumns: `repeat(${noOfPlayers}, 1fr)`,
            }}
        >
            <PlayerCardTiny player={player} />
            <PlayerCardTiny player={player} />
            <PlayerCardTiny player={player} />
            <PlayerCardTiny player={player} />
            <PlayerCardTiny player={player} />
            <PlayerCardTiny player={player} />
        </section>
    );
}

export default ScoreBoard;
