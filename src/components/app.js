import React, { Component } from 'react';

<<<<<<< HEAD
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
=======
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
>>>>>>> 923054e79dfc40e8e4329b77d79d001b9d9e8bac

export default class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <SearchBar />
        <WeatherList/>
=======
        <BookList />
        <BookDetail />
>>>>>>> 923054e79dfc40e8e4329b77d79d001b9d9e8bac
      </div>
    );
  }
}
