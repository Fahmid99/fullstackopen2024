import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, bad, neutral, score }) {
  return (
    <div>
      <h2>Statistics</h2>
      {good + bad + neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <ul>
          <li>
            <StatisticLine text="good" value={good} />
          </li>
          <li>
            <StatisticLine text="bad" value={bad} />
          </li>
          <li>
            <StatisticLine text="neutral" value={neutral} />
          </li>
          <li>all {good + bad + neutral} </li>
          <li>average {score / (good + bad + neutral)}</li>
          <li>positive {good / (good + bad + neutral)} % </li>
        </ul>
      )}
    </div>
  );
}

export default Statistics;
