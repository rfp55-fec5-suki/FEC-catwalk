import React from 'react';
import RelatedProductCard from './relateditems/relatedproductcard.jsx';
import RelatedProductModal from './relateditems/relatedproductmodal.jsx';

import AddOutfit from './outfitlist/addoutfit.jsx';
import OutfitCard from './outfitlist/outfitcard.jsx';
import './riac.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storage: []
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.outfitSlideLeft = this.outfitSlideLeft.bind(this);
    this.outfitSlideRight = this.outfitSlideRight.bind(this);

    this.fetchStorage = this.fetchStorage.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeOutfit = this.removeOutfit.bind(this);
  }

  fetchStorage() {
    var arr = [...Object.values(localStorage)];
    this.setState({
      storage: arr
    })
  }

  addToOutfit() {
    localStorage.setItem(`${this.props.product.id}`, `${this.props.product.id}`)
    this.fetchStorage();
  }

  removeOutfit(item) {
    localStorage.removeItem(item)
    this.fetchStorage();
  }

  componentDidMount() {
    this.fetchStorage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.fetchStorage();
    }
  }

  slideLeft() {
    document.getElementById('riac-carousel').scrollLeft -= 260;
  }

  slideRight() {
    document.getElementById('riac-carousel').scrollLeft += 260;
  }

  outfitSlideLeft() {
    document.getElementById('outfit-carousel').scrollLeft -= 260;
  }

  outfitSlideRight() {
    document.getElementById('outfit-carousel').scrollLeft += 260;
  }

  render() {
    return (
      <div>

        <div className='riac-carousel'>

          <div className='riac-productcard-header'>
            RELATED PRODUCTS
          </div>

          <button className='riac-left-button' onClick={this.slideLeft}/>
          <button className='riac-right-button' onClick={this.slideRight}/>

          <div className='riac-container'>

            <div className='riac-related-products' id='riac-carousel'>

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

          <button className='riac-left-button' onClick={this.outfitSlideLeft}/>
          <button className='riac-right-button' onClick={this.outfitSlideRight}/>

          <div className='riac-container'>

            <div className='riac-related-products' id='outfit-carousel'>

              <AddOutfit onClick={this.addToOutfit} />

              {this.state.storage ? this.state.storage.map((productid) => {
                return <OutfitCard productid={productid} onClick={this.props.onClick} removeOutfit={this.removeOutfit}/>
              }) : null}

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default RelatedProducts;