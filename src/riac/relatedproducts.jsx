import React from 'react';
import ProductCard from './productcard.jsx';
import RelatedProductCard from './relatedproductcard.jsx';
import './riac.css';

const RelatedProducts = (props) => (
  <div className='riac-carousel'>

    <div className='riac-productcard-header'>

      RELATED PRODUCTS

    </div>

    <div className='riac-container'>
      {/* Make another div that lays over this one for the button. make that div the screen size rather than the div list*/}

      <button className='riac-left-button' />
      <button className='riac-right-button' />

      <div className='riac-related-products'>


        <ProductCard product={props.product} styles={props.styles} onClick={props.onClick} />

        {props.related.map((productid) => {
          return <RelatedProductCard productid={productid} onClick={props.onClick} />
        })}


      </div>
    </div>
  </div>
)

export default RelatedProducts;