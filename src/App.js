import React, { Component } from 'react';
import token from '../config.js';
import axios from 'axios';
import './App.css';

import initialProduct from './initialProduct.js';
import initialProductStyles from './initialProductStyles.js';
import initialRelated from './initialRelated.js';

import Overview from './overview/Overview.jsx';
import RelatedProducts from './riac/relatedproducts.jsx';
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
      }
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
      }
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
      }
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

        <Overview product={this.state.product} styles={this.state.styles} />

        <RelatedProducts product={this.state.product} related={this.state.related} onClick={this.handleClick}/>

        <QAList product={this.state.product}/>

        <Reviews product_id={this.state.product.id}/>

      </div>

    );
  }
}



export default App;
