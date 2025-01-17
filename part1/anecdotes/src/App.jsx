import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [number, setNumber] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const [votes, setVotes] = useState(points);
  const handleRandom = () => {
    setNumber(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const copy = { ...votes };
    copy[number] += 1;
    setVotes(copy);
    if (copy[number] > copy[mostVotes]) {
      setMostVotes(number)
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
      }}
    > 
    <h1>Anecdote of the day!</h1>
      <div>
        <button onClick={handleRandom}>Generate random anecdote</button>
        <button onClick={handleVote}>Vote</button>
      </div>
      <div style={{ marginTop: "1em" }}>
        {anecdotes[number]} {votes[number]}
      </div>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVotes]} {votes[mostVotes]}
      </p>
    </div>
  );
};

export default App;
