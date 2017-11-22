import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // To make sure onInputChange is run in the right context.
    // Trying this approach instead of using an arrowfunction,
    // either as the function itself or in the input itself:
    // onChange={event => this.onInputChange(event.target.value)}
    // OR simply using this.onInputChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      // className from BootStrap
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a five-day forecase in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className=" btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
