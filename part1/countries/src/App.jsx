import { useState, useEffect } from "react";
import countryService from "./services/countries";
import "./App.css";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    setSelectedCountry(null);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  const countryToDisplay = countriesToShow.length === 1 ? countriesToShow[0] : selectedCountry;

  return (
    <div>
      <label>
        find countries
        <input value={filteredCountry} onChange={handleInput} />
      </label>
      {countriesToShow.length > 10 ? (
        <div style={{ padding: "1em" }}>
          too many matches, specify another filter
        </div>
      ) : countryToDisplay ? (
        <Country
          name={countryToDisplay.name.common}
          capital={countryToDisplay.capital}
          area={countryToDisplay.area}
          languages={countryToDisplay.languages}
          flag={countryToDisplay.flags.svg}
        />
      ) : (
        countriesToShow.map((country) => (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => handleShowCountry(country)}>show</button>
          </p>
        ))
      )}
    </div>
  );
}

export default App;
