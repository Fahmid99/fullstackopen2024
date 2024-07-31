import React from "react";
import Weather from "./Weather";
function Country({ country, weather }) {
  let c = country;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{c.name.common}</h1>
      <p>
        <b>Captial</b> {c.capital}
      </p>
      <p>
        <b>Area</b> {c.area}
      </p>
      <h3>languages:</h3>
      <ul>
        {Object.values(c.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={c.flags.svg} width={"200px"}></img>
      <Weather country={country} weather={weather} />
    </div>
  );
}

export default Country;
