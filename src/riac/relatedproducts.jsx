import React from 'react';
import RelatedProductCard from './relateditems/relatedproductcard.jsx';
import RelatedProductModal from './relateditems/relatedproductmodal.jsx';

import AddOutfit from './outfitlist/addoutfit.jsx';
import OutfitCard from './outfitlist/outfitcard.jsx';
import './riac.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.addToOutfit = this.addToOutfit.bind(this);
  }

  addToOutfit() {
    localStorage.setItem(`${this.props.product.id}`, `${this.props.product.id}`)
  }

  // remove outfit button


  // componentmount
  // update

  render() {
    var values = Object.values(localStorage)

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
                return <RelatedProductCard product={this.props.product} productid={productid} onClick={this.props.onClick} />
              })}

            </div>
          </div>
        </div>




        <div className='riac-carousel'>

          <div className='riac-productcard-header'>
            YOUR OUTFIT
          </div>

          <button className='riac-left-button' />
          <button className='riac-right-button' />

          <div className='riac-container'>

            <div className='riac-related-products'>

              <AddOutfit onClick={this.addToOutfit} />

              {values ? values.map((productid) => {
                return <OutfitCard productid={productid} onClick={this.props.onClick}/>
              }) : null}

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default RelatedProducts;