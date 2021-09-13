import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Overview from './overview/Overview.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>
        <Overview />
      </div>
    );
  }
}



export default hot(module)(App);
