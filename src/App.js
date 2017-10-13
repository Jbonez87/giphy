import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import { 
  Container, 
  Header, 
  Title, 
  Name, 
  Footer, 
  SocialLink,
  NavBar,
  NavItem,
  SearchItem,
  GifContainer,
  Gif,
  Form,
  Input,
  Button,
  FormContainer,
  ResultCount,
  SearchContainer
} from './components/ui';
import SearchView from './components/SearchView';
import Trending from './components/Trending';

const mainThemes = {
  colors: ['rgba(79, 196, 233, 0.7);', 'rgb(7, 60, 98);', 'rgb(255, 255, 255);'],
}

class App extends Component {
  constructor() {
    super();
    this.terms = [];
    this.state = {
      query: '',
      isTrending: true,
      querySent: false,
      pastTerms: [],
      count: 0,
      totalCount: 0,
      limit: 100,
      apiKey: 'KIASvvgLXop9U3lEWa1EVuo2VWL3IoMf',
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
    if (this.state.query === '') {
      console.log(this.state.query)
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.getGifs();
    }
  }
  storeTerms(term) {
    if (term === '') {
      console.log(term);
    }
    this.terms.push(term)
    // this.state.pastTerms.push(term)
    this.setState({
      pastTerms: this.terms,
    })
  }
  buildTerms(terms) {
    return terms.map((term, idx) => {
      return <SearchItem
        key={idx}
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
      isTrending: false,
      query: e.target.innerText,
    })
    await this.getGifs();
  }
  async getGifs() {
    this.storeTerms(this.state.query)
    let url = new URL(`/v1/gifs/search?api_key=${this.state.apiKey}&q=${this.state.query}&limit=${this.state.limit}`, 'https://api.giphy.com')
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
    let searchTerms = this.state.querySent ? this.buildTerms(this.state.pastTerms) : null;
    return (
      <Router>
        <Container background={mainThemes.colors[0]}>
          <Header background={mainThemes.colors[0]}>
            <Title border={mainThemes.colors[2]}>Welcome to <Name
              color={mainThemes.colors[1]}
            >
                GiphySearch
              </Name>
            </Title>
          </Header>
          <NavBar
            background={mainThemes.colors[0]}
          >
            <ul>
              <NavItem>
                <Link to="/">Trending Gifs</Link>
              </NavItem>
              <NavItem>
                <Link to="/search">Search Gifs</Link>
              </NavItem>
            </ul>
          </NavBar>
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
            <ResultCount>
              {this.state.count} of {this.state.totalCount} results
            </ResultCount>
            <ul>
              {searchTerms}
            </ul>
            <SearchContainer>
              <Switch>
                <Route exact path="/" component={Trending} />
                <Route path="/search" render={() => <SearchView
                                                      gifs={this.state.gifs}
                                                      makeGifs={this.makeGifs}
                                                    />} />
              </Switch>
            </SearchContainer>
          </FormContainer>
          <Footer
            background={mainThemes.colors[0]}
            color={mainThemes.colors[1]}
          >
            <p>
              &copy; GiphySearch {new Date().getFullYear()} | Powered By GIPHY | Made with &hearts; by <SocialLink
                color={mainThemes.colors[2]}
                href="https://www.linkedin.com/in/john-castrillon-a50141b8/"
                rel="noopener noreferrer"
                target="_blank"
              >
                John Castrillon
          </SocialLink>
            </p>
          </Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
