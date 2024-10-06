import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }, index) => (
        <p
          key={id}
          className="guess"
        >
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
