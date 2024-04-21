import React from "react";

import "../Game.css";

const GameCircle = ({ id, onCircleClicked, children, className }) => {
  return (
    <div
      className={`gameCircle  ${className} `}
      onClick={() => onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
