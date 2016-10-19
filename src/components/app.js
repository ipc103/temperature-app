import React, { Component } from 'react';
import Dog from './dog';
import SearchBar from '../containers/search_bar';
import CityList from '../containers/city_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityList />
      </div>
    );
  }
}
