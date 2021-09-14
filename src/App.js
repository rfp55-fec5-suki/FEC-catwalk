import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import './App.css';
import QAList from './Q&A/QAList.jsx'
import Reviews from './reviews/RatingsReviews.jsx';

import ProductCard from './riac/productcard.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Best E-Commerce App EVER! </h1>
        <ProductCard />
        <QAList />
        <Reviews />
      </div>

    );
  }
}



export default App;
