import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import './riac.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {},
      img: {},
      stars: {}
    };

  }

  render() {
    this.state.info = this.props.product;
    this.state.img = this.props.styles;
    return (
      <div>

        <div className='riac-productcard-header'>

          RELATED PRODUCTS

        </div>

        <div className='riac-productcard' onClick={() => this.props.onClick(this.state.info.id)}>

          <div className='riac-productcard-image'>
            <img src={this.state.img.results[0].photos[0].thumbnail_url} />
            <button className='riac-productcard-button'>button</button>

          </div>

          <div className='riac-productcard-description'>

            <div className='riac-productcard-category'> {this.state.info.category} </div>
            <div className='riac-productcard-name'> {this.state.info.name} </div>
            <div className='riac-productcard-price'> {this.state.info.default_price} </div>
            <div className='riac-productcard-rating'> Star Rating</div>

          </div>

        </div>

      </div>
    );
  }
}

export default ProductCard;