import React from "react";

function Total({ parts }) {
  const initialValue = 0;
  const totalExercises = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
}

export default Total;
