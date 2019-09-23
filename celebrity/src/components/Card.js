import React from "react";
import { StyledCard } from "../AppStyles";

export default function Card({ currentCard, onBtnClick }) {
  return (
    <StyledCard>
      <h1>{currentCard.name}</h1>
      <img src={currentCard.image_url} alt="celeb"></img>
      <p>{currentCard.info}</p>
      <p>Born: {currentCard.born}</p>
      <div className="buttons">
        <button id='dead' name="dead" onClick={onBtnClick}>
          Dead
        </button>
        <button id='alive' name="alive" onClick={onBtnClick}>
          Alive
        </button>
      </div>
    </StyledCard>
  );
}
