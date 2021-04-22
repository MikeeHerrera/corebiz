import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from '../src/Home/index';
import axios from 'axios';
import App from './App';
axios.defaults.baseURL = 'https://corebiz-test.herokuapp.com/api/v1/';
ReactDOM.render(
    <App/>,
    document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
