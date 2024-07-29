import React from "react";

function StatisticLine({ text, value }) {
  return (
    <div>
      <li>
        {text} {value}
      </li>
    </div>
  );
}

export default StatisticLine;
