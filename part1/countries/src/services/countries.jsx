import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const weatherUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

const getAll = () => {
  return axios.get(baseUrl);
};

const getWeather = (lat, lon, api_key) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
  );
};

export default {
  getAll: getAll,
  getWeather: getWeather
};
