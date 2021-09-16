import React from 'react';
import RelatedProductCard from './relatedproductcard.jsx';
import RelatedProductModal from './relatedproductmodal.jsx';
import './riac.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(id) {
    this.setState({
      selected: id
    })
  }

  render() {
    return (
    <div>

      <RelatedProductModal product={this.props.product} selected={this.state.selected} />

      <div className='riac-carousel'>

        <div className='riac-productcard-header'>
          RELATED PRODUCTS
        </div>

        <button className='riac-left-button' />
        <button className='riac-right-button' />

        <div className='riac-container'>

          <div className='riac-related-products'>

            {this.props.related.map((productid) => {
              return <RelatedProductCard productid={productid} onClick={this.props.onClick} modal={this.handleModal} />
            })}

          </div>
        </div>
      </div>
      </div>

    )
  }
}

// const RelatedProducts = (props) => (
// )

export default RelatedProducts;