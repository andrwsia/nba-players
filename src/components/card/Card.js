import React from "react";
import './Card.css';

const Card = ({name, team, image}) => {
  return (
      <div className="card-container">
        <img alt={name} src={image}></img>
        <div className="player-info">
          <h2 className="text-white">{name}</h2>
          <p className="text-white">{team}</p>
        </div>
      </div>
  );
};

export default Card;