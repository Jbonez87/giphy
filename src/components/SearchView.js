import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResultsContainer,
  FormContainer,
} from './ui';

// const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class SearchView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormContainer>
        <ResultsContainer>
          <ul>
            {this.props.makeGifs(this.props.gifs)}
          </ul>
        </ResultsContainer>
      </FormContainer>
    );
  }
}

SearchView.propTypes = {
  makeGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
}

export default SearchView;
