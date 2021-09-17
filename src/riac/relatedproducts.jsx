import React from 'react';
import RelatedProductCard from './relateditems/relatedproductcard.jsx';
import RelatedProductModal from './relateditems/relatedproductmodal.jsx';

import AddOutfit from './outfitlist/addoutfit.jsx';
import OutfitCard from './outfitlist/outfitcard.jsx';
import './riac.css';

const RelatedProducts = (props) => (
  <div>

    <div className='riac-carousel'>

      <div className='riac-productcard-header'>
        RELATED PRODUCTS
      </div>

      <button className='riac-left-button' />
      <button className='riac-right-button' />

      <div className='riac-container'>

        <div className='riac-related-products'>

          {props.related.map((productid) => {
            return <RelatedProductCard product={props.product} productid={productid} onClick={props.onClick} />
          })}

        </div>
      </div>
    </div>




    <div className='outfit-carousel'>

      <div className='outfit-header'>
        YOUR OUTFIT
      </div>

      <button className='outfit-left-button' />
      <button className='outfit-right-button' />

      <div className='outfit-container'>

        <div className='outfit-list'>

          <AddOutfit />

          <OutfitCard />

        </div>
      </div>
    </div>

  </div>
)

export default RelatedProducts;