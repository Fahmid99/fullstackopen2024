import React from "react";

function Notification({ notificationType, message }) {
  const setColour = () => {
    if (notificationType === "error") {
      return "red";
    } else {
      return "green";
    }
  };

  return message === null || message === "" ? null : (
    <div
      className={notificationType}
      style={{
        color: setColour(),
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {message}
    </div>
  );
}

export default Notification;
