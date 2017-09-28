import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchResult extends Component {
  render() {
    return (
      <ul>
        {this.props.makeGifs(this.props.gifs)}
      </ul>
    );
  }
}

SearchResult.propTypes = {
  gifs: PropTypes.array,
  makeGifs: PropTypes.func,
};

export default SearchResult;
