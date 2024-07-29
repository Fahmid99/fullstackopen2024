import React from "react";

function Total({ parts }) {
  const initialValue = 0;
  const totalExercises = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <div>
      <p>
        <b>Number of exercises {totalExercises}</b>
      </p>
    </div>
  );
}

export default Total;
