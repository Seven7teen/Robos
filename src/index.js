import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
// import { robots } from './robots.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <App />,
  // <CardList robots= { robots }/>,
  // <div>
  //   <Robo id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  //   <Robo id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
  // </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
