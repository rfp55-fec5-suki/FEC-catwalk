import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import token from '../../../config.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import RelatedProductModal from './relatedproductmodal.jsx';
import ModalComparison from './modalcomparison.jsx';
import noImage from '../../noImage.js';
import '../riac.css';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      info: {},
      img: '',
      styles: {},
      stars: {},
      price: '',
      sale: '',
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
          styles: response.data,
          price: response.data.results[0].original_price,
          sale: response.data.results[0].sale_price
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
    if (this.props.product.features && this.state.info.features) {
      var comparison = [...this.props.product.features, ...this.state.info.features];
    }
    return (
      <div>
        <RelatedProductModal show={this.state.show} handleClose={this.hideModal}>
          <p className='riac-modal-header'>Comparing</p>
          <div className='riac-modal-current'>
            {this.props.product.name}
          </div>

          {comparison ? comparison.map((feature) => {
            return <ModalComparison feature={feature} current={this.props.product.features} compared={this.state.info.features} />
          }) : null}

          <div className='riac-modal-compared'>
            {this.state.info.name}
          </div>
        </RelatedProductModal>

        <div className='riac-productcard'>

          <i className='fas fa-star riac-productcard-button' onClick={this.showModal}></i>

          <div className='riac-productcard-image' onClick={() => this.props.onClick(this.state.info.id)}>
            {this.state.img ? <img src={this.state.img} /> : <img src={noImage} />}
          </div>

          <div className='riac-productcard-category'> {this.state.info.category} </div>
          <div className='riac-productcard-name'> {this.state.info.name} </div>

          {this.state.sale ?
            <div className='riac-productcard-price'>
              <div className='riac-productcard-sale'> {this.state.sale} </div>
              <div className='riac-productcard-price-sale'> {this.state.price} </div>
            </div>
            : <div className='riac-productcard-price'> {this.state.info.default_price} </div>}

          {$.isEmptyObject(this.state.stars) ? null
            : <div className='riac-productcard-rating'> <StarRating meta={this.state.stars} /> </div>}

        </div>
      </div>
    );
  }
}

export default RelatedProductCard;