import React from "react";

function Statistics({ good, bad, neutral, score }) {
  return (
    <div>
      <h2>Statistics</h2>
      {good + bad + neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <ul>
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {good + bad + neutral} </li>
          <li>average {score / (good + bad + neutral)}</li>
          <li>positive {good / (good + bad + neutral)} % </li>
        </ul>
      )}
    </div>
  );
}

export default Statistics;
