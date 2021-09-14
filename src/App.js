import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import token from '../config.js';
import axios from 'axios';
import './App.css';

import initialProduct from './initialProduct.js';
import initialProductStyles from './initialProductStyles.js';
import initialRelated from './initialRelated.js';

import Overview from './overview/Overview.jsx';
import ProductCard from './riac/productcard.jsx';
import QAList from './Q&A/QAList.jsx'
import Reviews from './reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: initialProduct,
      styles: initialProductStyles,
      related: initialRelated
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
      headers: {
        'Authorization': token.TOKEN
      },
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          product: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      headers: {
        'Authorization': token.TOKEN
      },
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          styles: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
      headers: {
        'Authorization': token.TOKEN
      },
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          related: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='App'>
        <h1> Best E-Commerce App EVER! </h1>

        <Overview />

        <ProductCard product={this.state.product} styles={this.state.styles} onClick={this.handleClick} related={this.state.related}/>

        <QAList />

        <Reviews />

      </div>

    );
  }
}



export default App;
