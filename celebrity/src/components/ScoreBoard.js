import React from "react";
import { StyledScoreBoard } from "../AppStyles";

export default function ScoreBoard({ answers }) {
  return (
    <StyledScoreBoard>
      <h1>Current Score</h1>
      {answers.map(answer => (
        <h3>{answer[0]} : {answer[1]}</h3>
      ))}
    </StyledScoreBoard>
  );
}
