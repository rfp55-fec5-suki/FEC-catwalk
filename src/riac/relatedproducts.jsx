import React from 'react';
import RelatedProductCard from './relatedproductcard.jsx';
import RelatedProductModal from './relatedproductmodal.jsx';
import './riac.css';

// change back to stateless?

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>

        <div className='riac-carousel'>

          <div className='riac-productcard-header'>
            RELATED PRODUCTS
          </div>

          <button className='riac-left-button' />
          <button className='riac-right-button' />

          <div className='riac-container'>

            <div className='riac-related-products'>

              {this.props.related.map((productid) => {
                return <RelatedProductCard productid={productid} onClick={this.props.onClick} />
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