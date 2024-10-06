import React from "react";

function GuessInput({ className, htmlFor, children }) {
  const [guess, setGuess] = React.useState("");
  console.log(guess);

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters 💖");
      return;
    }

    console.log({ guess });

    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      value={guess}
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
