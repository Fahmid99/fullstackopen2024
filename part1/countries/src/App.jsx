import { useState, useEffect } from "react";
import countryService from "./services/countries";
import "./App.css";
import Country from "./Country";
const api_key = "";
function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

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

  const countryToDisplay =
    countriesToShow.length === 1 ? countriesToShow[0] : selectedCountry;

  useEffect(() => {
    if (countryToDisplay) {
      countryService
        .getWeather(
          countryToDisplay.latlng[0],
          countryToDisplay.latlng[1],
          api_key
        )
        .then((response) => {
          setWeather(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [countryToDisplay]);

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
        <Country country={countryToDisplay} weather={weather} />
      ) : (
        countriesToShow.map((country) => (
          <p key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShowCountry(country)}>show</button>
          </p>
        ))
      )}
    </div>
  );
}

export default App;
