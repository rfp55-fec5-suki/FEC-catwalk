import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import './riac.css';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      info: {},
      img: '',
      styles: {},
      stars: {}
    };

  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.id}`,
      headers: {
        'Authorization': token.TOKEN
      },
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          info: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.id}/styles`,
      headers: {
        'Authorization': token.TOKEN
      },
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          img: response.data.results[0].photos[0].thumbnail_url,
          styles: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {

    this.state.id = this.props.productid;

    return (
      <div>

        <div className='riac-productcard' onClick={() => this.props.onClick(this.state.info.id)}>

          <div className='riac-productcard-image'>
            <img src={this.state.img} />
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

export default RelatedProductCard;