import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container clearfix">
        <header className="page-header">
          <h1>Welcome to <span>GiphySearch</span></h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
