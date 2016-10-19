import React, {Component} from 'react';
import Chart from '../components/chart';
import Map from '../components/google_map';

export default (props) => {
  const cityName = props.weatherData.city.name;
  const forecast = props.weatherData.list;
  const coords = props.weatherData.city.coord;

  const forecastData = (prop) => {
      return forecast.map((data)=> { return data.main[prop]; });
    };

  return (
    <tr>
      <td>
        < Map lat={coords.lat} lon={coords.lon} />
      </td>
      <td>
        < Chart data={forecastData('temp')} color="red" />
      </td>
      <td>
        < Chart data={forecastData('pressure')} color="blue" />
      </td>
      <td>
        < Chart data={forecastData('humidity')} color="green" />
      </td>
    </tr>);
}
