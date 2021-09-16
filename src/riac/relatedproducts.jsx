import React from 'react';
import RelatedProductCard from './relatedproductcard.jsx';
import './riac.css';

const RelatedProducts = (props) => (
  <div className='riac-carousel'>

    <div className='riac-productcard-header'>
      RELATED PRODUCTS
    </div>

    <button className='riac-left-button' />
    <button className='riac-right-button' />

    <div className='riac-container'>

      <div className='riac-related-products'>

        {props.related.map((productid) => {
          return <RelatedProductCard productid={productid} onClick={props.onClick} />
        })}

      </div>
    </div>
  </div>
)

export default RelatedProducts;