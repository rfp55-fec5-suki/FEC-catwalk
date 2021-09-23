import React from 'react';
import axios from 'axios';
import token from '../../../config.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import noImage from '../../noImage.js';
import '../riac.css';
import { TrackClickContext } from './../../trackClick.jsx';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      info: {},
      img: '',
      styles: {},
      stars: {},
    };

    this.fetchProduct = this.fetchProduct.bind(this);
  }


  fetchProduct() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.productid}`,
      headers: {
        'Authorization': token.TOKEN
      }
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
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.productid}/styles`,
      headers: {
        'Authorization': token.TOKEN
      }
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
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.productid}`,
      headers: {
        'Authorization': token.TOKEN
      }
    })
      .then((response) => {
        this.setState({
          stars: response.data.ratings
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productid !== this.props.productid) {
      this.fetchProduct();
    }
  }

  render() {
    return (
      <TrackClickContext.Consumer>{(context) => {
        return (
          <div>

            <div className='riac-productcard'>

              <i class='fas fa-times-circle riac-productcard-button' onClick={() => {this.props.removeOutfit(this.state.info.id); context.click('Remove Outfit Button', 'Related Products')}}></i>

              <div className='riac-productcard-image' onClick={() => {this.props.onClick(this.state.info.id); context.click('Select New Product', 'Related Products')}}>
                {this.state.img ? <img src={this.state.img} /> : <img src={noImage} />}
              </div>

              <div className='riac-productcard-category'> {this.state.info.category} </div>
              <div className='riac-productcard-name'> {this.state.info.name} </div>
              <div className='riac-productcard-price'> {this.state.info.default_price} </div>
              <div className='riac-productcard-rating'> <StarRating meta={this.state.stars} /> </div>

            </div>
          </div>
        )
      }}
      </TrackClickContext.Consumer>
    );
  }
}

export default OutfitCard;