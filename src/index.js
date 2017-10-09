import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Audiowide');
  * {
    all: unset;
  }
  base, basefont, datalist, head, meta, script, style, title,
  noembed, param, template {
    display: none;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`
