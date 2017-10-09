import React, { Component } from 'react';
import PropTypes from 'prop-types';

const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    }
  }
  async componentDidMount() {
    let url = new URL(`/v1/gifs/trending?api_key=${apiKey}&limit=100`, 'https://api.giphy.com');
    let trendingGifs = await fetch(url)
    let parsedTrending = await trendingGifs.json()
    this.setState({
      trending: parsedTrending.data,
    })
  }
  render() {
    return (
      <div className="results-container clearfix">
        {this.props.makeGifs(this.state.trending)}
      </div>
    );
  }
}

Trending.propTypes = {
  makeGifs: PropTypes.func.isRequired,
};

export default Trending;