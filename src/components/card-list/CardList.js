import React from "react";
import Card from "../card/Card.js";

const CardList = ({ nbaPlayers }) => {
  const cardListArray = nbaPlayers.map((player) => {
    return (
      <Card
        key={player.id}
        id={player.id}
        name={player.name}
        team={player.team}
        image={player.image}
      />
    )
  });

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10">
      {cardListArray}
    </div>
  );
};

export default CardList;