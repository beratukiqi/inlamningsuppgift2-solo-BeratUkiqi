import PlayerCardBig from "./PlayerCardBig";

function PlayerSetup() {
    const player = {
        name: "Berat",
        points: 414, // Each round point + prev points here
        pointsHistory: [4, 15, 55, 152], // Each rounds points are added here
    };

    return (
        <>
            <PlayerCardBig player={player} />
            <PlayerCardBig player={player} />
        </>
    );
}

export default PlayerSetup;
