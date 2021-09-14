import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import './App.css';
<<<<<<< HEAD
import Overview from './overview/Overview.jsx';
=======
import QAList from './Q&A/QAList.jsx'
import Reviews from './reviews/RatingsReviews.jsx';

import ProductCard from './riac/productcard.jsx';
>>>>>>> master

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>
<<<<<<< HEAD
        <Overview />
=======
        <ProductCard />
        <QAList />
        <Reviews />
>>>>>>> master
      </div>

    );
  }
}



export default App;
