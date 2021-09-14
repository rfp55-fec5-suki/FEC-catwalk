import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import token from '../config.js';
import axios from 'axios';
import './App.css';

import initialProduct from './initialProduct.js';
import initialProductStyles from './initialProductStyles.js';

import ProductCard from './riac/productcard.jsx';
import QAList from './Q&A/QAList.jsx'
import Reviews from './reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: initialProduct,
      styles: initialProductStyles
    }
  }

  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/',
  //     headers: {
  //       'Authorization': token.TOKEN
  //     },
  //     responseType: 'stream'
  //   })
  //     .then((response) => {
  //       this.setState({
  //         product: response.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className='App'>
        <h1> Hello, React! </h1>

        <ProductCard product={this.state.product} styles={this.state.styles}/>

        <QAList />

        <Reviews />

      </div>

    );
  }
}



export default App;
