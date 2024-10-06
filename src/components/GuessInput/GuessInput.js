import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters 💖");
      return;
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      value={tentativeGuess}
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
