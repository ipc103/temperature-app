import axios from 'axios';

const API_KEY = 'b75b6d85630e2ef1226b8e3df6bf933b';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?&mode=json&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(query){
  const url = `${BASE_URL}&q=${query},us`;
  let request = axios.get(url)
                     .then((response) => {
                       return response.data
                     })

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
