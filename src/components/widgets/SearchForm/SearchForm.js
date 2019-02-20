import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    value: ""
  }

  // Must have this here so we can reset it
  timeout = null;

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout( () => {
      this.props.callback(false, this.state.value);
    }, 500);
  }

  render()  {
    return (
      <div className="searchform-wrapper">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={"Search"}
        />
      </div>
    )
  }
}

SearchForm.propTypes = {
  callback: PropTypes.func,
  loading: PropTypes.bool
}

export default SearchForm;