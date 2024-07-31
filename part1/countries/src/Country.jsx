import React from "react";

function Country({ name, capital, area, languages, flag }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{name}</h1>
      <p>
        <b>Captial</b> {capital}
      </p>
      <p>
        <b>Area</b> {area}
      </p>
      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag} width={"200px"}></img>
    </div>
  );
}

export default Country;
