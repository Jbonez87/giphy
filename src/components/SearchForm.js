import React, { Component } from 'react';
import SearchResult from './SearchResult';

import '../css/search.css';

const baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=';
const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      gifs: [],
      count: 0,
      totalCount: 0,
    }
    this.makeGifs = this.makeGifs.bind(this);
    this.getGifs = this.getGifs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearGifs = this.clearGifs.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 13 ) {
      this.getGifs();
    }
  }
  async getGifs() {
    let gifs = await fetch(`${baseUrl}${apiKey}&q=${this.state.query}`)
    let parsedGifs = await gifs.json()
    console.log(parsedGifs);
    this.setState({
      gifs: parsedGifs.data,
      count: parsedGifs.pagination.count,
      totalCount: parsedGifs.pagination.total_count,
    })
    this.makeGifs(this.state.gifs)
  }
  clearGifs(e) {
    e.preventDefault();
    this.setState({
      query: '',
      gifs: [],
      count: 0,
      totalCount: 0,
    });
  }
  makeGifs(gifs) {
    return gifs.map(gif => {
      return (
        <li key={gif.id} className="search-item">
          <div className="search">
            <img src={gif.images.downsized_large.url} alt="" />
          </div>
        </li>
      );
    })
  }
  render() {
    return (
      <div className="form-container clearfix">
        <div className="form clearfix">
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Search for gifs!"
            />
            <button
              className="search-button"
              id="go"
              type="button"
              onClick={this.getGifs}
              onKeyUp={this.handleKeyUp}
            >
              Go
            </button>
            <button
              className="search-button"
              id="clear"
              type="button"
              onClick={this.clearGifs}
            >
              Clear
            </button>
        </div>
        <span
          className="results clearfix"
        >{this.state.count} of {this.state.totalCount} results
        </span>
        <div className="results-container clearfix">
          <SearchResult
            gifs={this.state.gifs}
            makeGifs={this.makeGifs}
          />
        </div>
      </div>
    );
  }
}

export default SearchForm;
