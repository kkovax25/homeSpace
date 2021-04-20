import client from './client';
const API_KEY = process.env.REACT_APP_WEATHER_KEY;
const getWeather = (lat, lon) =>
  client.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&appid=${API_KEY}&units=metric`
  );
// eslint-disable-next-line
export default {
  getWeather,
};
