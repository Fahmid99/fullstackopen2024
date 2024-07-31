import { useState, useEffect } from "react";
import countryService from "./services/countries";
import "./App.css";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState("");
  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filteredCountry.toLowerCase())
  );
  const handleInput = (e) => {
    setFilteredCountry(e.target.value);
  };
  return (
    <div>
      find countries <input value={filteredCountry} onChange={handleInput} />
      {countriesToShow.length > 10 ? (
        <div style={{ padding: "1em" }}>
          too many matches, specify another filter
        </div>
      ) : countriesToShow.length === 1 ? (
        <Country
          name={countriesToShow[0].name.common}
          capital={countriesToShow[0].capital}
          area={countriesToShow[0].area}
          languages={countriesToShow[0].languages}
          flag={countriesToShow[0].flags.svg}
        />
      ) : (
        countriesToShow.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      )}
    </div>
  );
}

export default App;
