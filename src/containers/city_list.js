import React, {Component} from 'react';
import {connect} from 'react-redux';

import CityListItem from '../components/city_list_item';

class CityList extends Component {
  render(){
    return(
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temp</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(weatherData => <CityListItem weatherData={weatherData}  key={weatherData.city.name}/>)}
          </tbody>
        </table>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}
export default connect(mapStateToProps)(CityList);
