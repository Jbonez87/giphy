import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResultsContainer,
  FormContainer,
  SearchItem,
} from './ui';

// const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class SearchView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const propCheck = this.props.gifs ? this.props.makeGifs(this.props.gifs) : <SearchItem margin="0 auto">Search for something</SearchItem>
    return (
      <FormContainer>
        <ResultsContainer>
          <ul>
            {propCheck}
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
