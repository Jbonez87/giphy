import React, { Component } from 'react';
import { 
  ResultsContainer,
  SearchItem,
  GifContainer,
  Gif,
  ResultCount,
  FormContainer
} from './ui';

const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    }
  }
  async componentDidMount() {
    let url = new URL(`/v1/gifs/trending?api_key=${apiKey}&limit=100`, 'https://api.giphy.com')
    let trendingGifs = await fetch(url)
    let parsedTrending = await trendingGifs.json()
    this.setState({
      trending: parsedTrending.data,
    })
  }
  makeGifs(gifs) {
    return gifs.map(gif => {
      return (
        <SearchItem key={gif.id}>
          <GifContainer>
            <Gif
              src={gif.images.downsized_large.url}
              alt=""
            />
          </GifContainer>
        </SearchItem>
      );
    })
  }
  render() {
    return (
      <FormContainer>
        <ResultCount display="block">
          <p>Trending Gifs</p>
        </ResultCount>
        <ResultsContainer>
          {this.makeGifs(this.state.trending)}
        </ResultsContainer>
      </FormContainer>
    );
  }
}

export default Trending;