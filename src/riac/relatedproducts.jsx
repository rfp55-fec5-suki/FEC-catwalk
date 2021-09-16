import React from 'react';
import ProductCard from './productcard.jsx';
import RelatedProductCard from './relatedproductcard.jsx';
import './riac.css';

const RelatedProducts = (props) => (
  <div>
    <div className='riac-productcard-header'>

      RELATED PRODUCTS

    </div>

    <div className='riac-related-products'>

      <button className='riac-left-button'/>

      <ProductCard product={props.product} styles={props.styles} onClick={props.onClick} />

      {props.related.map((productid) => {
        return <RelatedProductCard productid={productid} onClick={props.onClick} />
      })}

      <button className='riac-right-button'/>

    </div>
  </div>
)

export default RelatedProducts;