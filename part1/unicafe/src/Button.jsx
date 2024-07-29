import React from "react";

function Button({ buttonName, handleClick }) {
  return (
    <div>
      <button style={{ marginRight: "1em" }} onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
