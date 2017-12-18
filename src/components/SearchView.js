import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ResultsContainer,
  FormContainer,
  SearchItem,
} from './ui'

class SearchView extends Component {
  render() {
    const { gifs, makeGifs } = this.props
    const propCheck = gifs ? makeGifs(gifs) : <SearchItem margin="0 auto">Search for something</SearchItem>
    return (
      <FormContainer>
        <ResultsContainer>
          <ul>
            {propCheck}
          </ul>
        </ResultsContainer>
      </FormContainer>
    )
  }
}

SearchView.propTypes = {
  makeGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
}

export default SearchView
