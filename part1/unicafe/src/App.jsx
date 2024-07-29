import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
    setScore(score + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setScore(score - 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div style={{ display: "flex" }}>
        <Button buttonName={"good"} handleClick={handleGood} />
        <Button buttonName={"neutral"} handleClick={handleNeutral} />
        <Button buttonName={"bad"} handleClick={handleBad} />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} score={score} />
    </div>
  );
};

export default App;
