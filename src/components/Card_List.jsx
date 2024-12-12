import React from "react";
import Card from "./card";
function CardList({ characters }) {
  return (
    <div className="list">
      {characters.map((character) => (
        <Card
          key={character.id}
          img1={character.img1}
          img2={character.img2}
          description={character.description}
        />
      ))}
    </div>
  );
}

export default CardList;
