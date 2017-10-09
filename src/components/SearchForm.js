import React, { Component } from 'react';
import Trending from './Trending';
// import SearchResult from './SearchResult';

import '../css/search.css';

const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      isTrending: true,
      query: '',
      gifs: [],
      count: 0,
      offSet: 0,
      totalCount: 0,
      limit: 1000,
    }
    this.makeGifs = this.makeGifs.bind(this);
    this.getGifs = this.getGifs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    if(this.state.query === '') {
      this.setState({
        isTrending: true,
      })
    }
    this.setState({
      isTrending: false,
      [e.target.name]: e.target.value,
    });
  }
  handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 13 ) {
      this.getGifs();
    }
  }
  handleBlur(e) {
    e.preventDefault();
    this.getGifs();
  }
  async getGifs() {
    let url = new URL(`/v1/gifs/search?api_key=${apiKey}&q=${this.state.query}&limit=${this.state.limit}&offSet=${this.state.offSet}`, 'https://api.giphy.com')
    let gifs = await fetch(url)
    // console.log(url);
    let parsedGifs = await gifs.json()
    // console.log(parsedGifs);
    this.setState({
      gifs: parsedGifs.data,
      count: parsedGifs.pagination.count,
      totalCount: parsedGifs.pagination.total_count,
    })
    this.makeGifs(this.state.gifs)
  }
  makeGifs(gifs) {
    return gifs.map(gif => {
      return (
        <li key={gif.id} className="search-item">
          <div className="search-container">
            <img
              src={gif.images.downsized_large.url}
              alt=""
              className="gif"
            />
          </div>
        </li>
      );
    })
  }
  render() {
    let trendingCheck = this.state.isTrending === true ? <Trending 
      makeGifs={this.makeGifs}
    /> : (
      <div className="results-container clearfix">
        <ul>
          {this.makeGifs(this.state.gifs)}
        </ul>
      </div>
    ); 
    return (
      <div className="form-container clearfix">
        <div className="form clearfix">
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyUp={this.handleKeyUp}
            placeholder="Search for gifs!"
          />
          <button
            className="search-button"
            id="search"
            type="button"
            onClick={this.getGifs}
            onKeyUp={this.handleKeyUp}
          >
            Search
          </button>
        </div>
        <span
          className="results clearfix"
        >
          {this.state.count} of {this.state.totalCount} results
        </span>
        {trendingCheck}
      </div>
    );
  }
}

export default SearchForm;
