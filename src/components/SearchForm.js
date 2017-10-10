import React, { Component } from 'react';
import styled from 'styled-components';
import Trending from './Trending';

const SearchItem = styled.li`
  list-style: none;
  display: inline;
  position: ${props => props.position};
  color: ${props => props.color || 'black'};
  padding: 5px;
  margin: ${props => props.margin || 0};
  border: ${props => props.border || 'none'};
`;

const SearchContainer = styled.div`
  padding: 10px;
`;

const GifContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Gif = styled.img`
  max-width: 300px;
  max-height: 300px;
`;

const ResultsContainer = styled.div`
  position: absolute;
  display: block;
  padding: 20px;
  margin: 0 0 30px 0;
  overflow: hidden;
  clear: both;
`;

const FormContainer = styled.div`
  display: block;
  padding: 10px 0 20px 0;
  overflow: hidden;
  clear: both;
`;

const Form = styled.div`
  width: 500px;
  overflow: hidden;
  clear: both;
`;

const Input = styled.input`
  background: white;
  border: 2px solid rgba(79, 196, 233, 0.7);
  width: 300px;
  padding: 10px;
  margin: 10px;
  color: rgb(26, 26, 26);
`;

const Button = styled.button`
  padding: 10px;
  background: white;
  transition: all .4s;
  cursor: pointer;
  color: rgb(12, 177, 93);
  border: 2px solid rgb(12, 177, 93);
  &:hover {
    background: rgb(12, 177, 93);
    color: white;
  }
`;

const ResultCount = styled.span`
  text-align: center;
  padding: 5px;
  margin-left: 10px;
  overflow: hidden;
  clear: both;
`;

const apiKey = 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      isTrending: true,
      querySent: false,
      pastTerms: [],
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
    this.storeTerms = this.storeTerms.bind(this);
    this.buildTerms = this.buildTerms.bind(this);
    this.searchAgain = this.searchAgain.bind(this);
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
  storeTerms(term) {
    this.state.pastTerms.push(term)
  }
  buildTerms(terms) {
    return terms.map(term => {
      return <SearchItem
              border="2px solid rgb(12, 177, 93)"
              margin="0 10px 0 10px"
              position="relative"
              color="rgb(12, 177, 93)"
              onClick={this.searchAgain}      
             >
              {term}
            </SearchItem>;
    })
  }
  async searchAgain(e) {
    e.preventDefault();
    await this.setState({
      query: e.target.innerText,
    })
    await this.getGifs();
  }
  async getGifs() {
    this.storeTerms(this.state.query)
    let url = new URL(`/v1/gifs/search?api_key=${apiKey}&q=${this.state.query}&limit=${this.state.limit}&offSet=${this.state.offSet}`, 'https://api.giphy.com')
    let gifs = await fetch(url)
    // console.log(url);
    let parsedGifs = await gifs.json()
    // console.log(parsedGifs);
    this.setState({
      querySent: true,
      gifs: parsedGifs.data,
      count: parsedGifs.pagination.count,
      totalCount: parsedGifs.pagination.total_count,
    })
    this.makeGifs(this.state.gifs)
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
    const trendingCheck = this.state.isTrending === true ? <Trending 
      makeGifs={this.makeGifs}
    /> : (
        <ResultsContainer>
        <ul>
          {this.makeGifs(this.state.gifs)}
        </ul>
        </ResultsContainer>
    );

    const resultCount = this.state.isTrending === true ? <ResultCount>Trending Gifs</ResultCount> :
      <ResultCount>
        {this.state.count} of {this.state.totalCount} results
      </ResultCount>;
      
    return (
      <div>
        <FormContainer>
          <Form>
            <Input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}
              placeholder="Search for gifs!"
            />
            <Button
              type="button"
              onClick={this.getGifs}
              onKeyUp={this.handleKeyUp}
            >
              Search
          </Button>
          </Form>
          {resultCount}
          <SearchContainer>
            <p>Past Searches:</p>
            <ul>
              {this.state.querySent === true ? this.buildTerms(this.state.pastTerms) : null}
            </ul>
          </SearchContainer>
          {trendingCheck}
        </FormContainer>
      </div>
    );
  }
}

export default SearchForm;
