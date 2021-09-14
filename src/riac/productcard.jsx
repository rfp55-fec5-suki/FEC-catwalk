import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import './riac.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      info: {},
      img: {},
      stars: {}
    };

    // binds
  }

  // functions

  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.products.id}/`,
  //     headers: {
  //       'Authorization': token.TOKEN
  //     },
  //     responseType: 'stream'
  //   })
  //     .then((response) => {
  //       this.setState({
  //         info: response.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   axios({
  //     method: 'get',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles',
  //     headers: {
  //       'Authorization': token.TOKEN
  //     },
  //     responseType: 'stream'
  //   })
  //     .then((response) => {
  //       this.setState({
  //         img: response.data.results[0].photos[0]
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    this.state.info = this.props.product;
    this.state.img = this.props.styles;
    return (
      <div>

        <div className='riac-productcard-header'>

          RELATED PRODUCTS

        </div>

        <div className='riac-productcard'>

          {/* <a href={props.repo.html_url}>link: {props.repo.html_url} </a> */}

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