import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import QList from './Q&A/Qlist.jsx'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>
        <QList />
      </div>
    );
  }
}



export default hot(module)(App);
