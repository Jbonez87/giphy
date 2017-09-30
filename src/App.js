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
        <footer>
          <p>
            &copy; <span>GiphySearch</span> {new Date().getFullYear()} | Powered By GIPHY | Made with &hearts; by <a
                href="https://www.linkedin.com/in/john-castrillon-a50141b8/"
                rel="noopener noreferrer"
                target="_blank"
              >
              John Castrillon
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
