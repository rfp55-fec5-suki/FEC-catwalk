import React from 'react';
import ProductCard from './productcard.jsx';
import RelatedProductCard from './relatedproductcard.jsx';
import './riac.css';

const RelatedProducts = (props) => (
  <div className='riac-carousel'>

    <div className='riac-productcard-header'>

      RELATED PRODUCTS

    </div>

    <button className='riac-left-button'>prev</button>
    <button className='riac-right-button'>next</button>

    <div className='riac-container'>

      <div className='riac-related-products'>


        {/* <ProductCard product={props.product} styles={props.styles} onClick={props.onClick} /> */}

        {props.related.map((productid) => {
          return <RelatedProductCard productid={productid} onClick={props.onClick} />
        })}


      </div>
    </div>
  </div>
)

export default RelatedProducts;