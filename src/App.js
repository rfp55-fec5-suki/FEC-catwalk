import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Reviews from './reviews/RatingsReviews.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>
        <Reviews />
      </div>
    );
  }
}



export default App;
