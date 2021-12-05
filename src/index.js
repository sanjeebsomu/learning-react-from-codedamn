import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { add } from './calculator'; //this is to learn exporting and importing
// alert(add(5, 6))

const container = document.getElementById('root');//this is a new syntax for creating root in react 18
const root = ReactDOM.createRoot(container);
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
