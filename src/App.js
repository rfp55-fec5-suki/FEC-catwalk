import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import QAList from './Q&A/QAList.jsx'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>
        <QAList />
      </div>
    );
  }
}



export default hot(module)(App);
