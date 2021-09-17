import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import StarRating from '../sharedComponents/StarRating.jsx';
import RelatedProductModal from './relatedproductmodal.jsx';
import ModalComparison from './modalcomparison.jsx';
import './riac.css';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      info: {},
      img: '',
      styles: {},
      stars: {},
      show: false
    };

    this.fetchProduct = this.fetchProduct.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
  };

  fetchProduct() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.id}`,
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
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.state.id}/styles`,
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
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.state.id}`,
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
    this.state.id = this.props.productid;
    return (
      <div>
        <RelatedProductModal show={this.state.show} handleClose={this.hideModal}>
          <p className='riac-modal-header'>Comparing</p>
          <div className='riac-modal-current'>
            {this.props.product.name}
          </div>

          {this.props.product.features.map((feature) => {
            return <ModalComparison feature={feature} compared={this.state.info.features} />
          })}

          <div className='riac-modal-compared'>
            {this.state.info.name}
          </div>
        </RelatedProductModal>

        <div className='riac-productcard'>


          <button className='riac-productcard-button' onClick={this.showModal}>star</button>


          <div className='riac-productcard-image' onClick={() => this.props.onClick(this.state.info.id)}>
            <img src={this.state.img} />
          </div>

          <div className='riac-productcard-category'> {this.state.info.category} </div>
          <div className='riac-productcard-name'> {this.state.info.name} </div>
          <div className='riac-productcard-price'> {this.state.info.default_price} </div>
          <div className='riac-productcard-rating'> <StarRating meta={this.state.stars} /> </div>

        </div>
      </div>
    );
  }
}

export default RelatedProductCard;