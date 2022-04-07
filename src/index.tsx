import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle} from "styled-components";

import FontStyles from 'fontStyles';
import loginbg from 'assets/images/loginbg.jpg';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-image: url(${loginbg}) center center/cover no-repeat;
    font-family: 'Poppins', helvetic, arial, sans-serif;
    font-size: 16px;
    color: #fff;
  }
`
ReactDOM.render(
  <React.StrictMode>
      <FontStyles />
      <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


