import React from 'react';
import RelatedProductCard from './relateditems/relatedproductcard.jsx';
import RelatedProductModal from './relateditems/relatedproductmodal.jsx';
import initialRelated from '../initialRelated.js';
import $ from 'jquery';

import AddOutfit from './outfitlist/addoutfit.jsx';
import OutfitCard from './outfitlist/outfitcard.jsx';
import './riac.css';
import { TrackClickContext } from './../trackClick.jsx';

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

    this.updateButtons = this.updateButtons.bind(this);
  }

  fetchStorage() {
    var arr = [...Object.values(localStorage)];
    this.setState({
      storage: arr
    })
  }

  updateButtons() {
    this.setState({
      scrollLeft: document.getElementById('riac-carousel').scrollLeft,
      maxScrollLeft: document.getElementById('riac-carousel').scrollWidth - document.getElementById('riac-carousel').clientWidth,
      outfitScroll: document.getElementById('outfit-carousel').scrollLeft,
      outfitMaxScroll: document.getElementById('outfit-carousel').scrollWidth - document.getElementById('outfit-carousel').clientWidth
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

  slideLeft() {
    document.getElementById('riac-carousel').scrollLeft -= 260;
    this.setState({
      scrollLeft: document.getElementById('riac-carousel').scrollLeft
    })
  }

  slideRight() {
    document.getElementById('riac-carousel').scrollLeft += 260;
    this.setState({
      scrollLeft: document.getElementById('riac-carousel').scrollLeft
    })
  }

  outfitSlideLeft() {
    document.getElementById('outfit-carousel').scrollLeft -= 260;
    this.setState({
      outfitScroll: document.getElementById('outfit-carousel').scrollLeft
    })
  }

  outfitSlideRight() {
    document.getElementById('outfit-carousel').scrollLeft += 260;
    this.setState({
      outfitScroll: document.getElementById('outfit-carousel').scrollLeft
    })
  }



  componentDidMount() {
    this.fetchStorage();
    setTimeout(this.updateButtons, 500);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.fetchStorage();
      setTimeout(this.updateButtons, 500);
    }
  }


  render() {
    var related = this.props.related.length === 0 ? initialRelated : this.props.related;

    return (
      <TrackClickContext.Consumer>{(context) => {

        return (
          <div>

            <div className='riac-carousel'>

              <div className='riac-productcard-header'>
                RELATED PRODUCTS
              </div>


              {this.state.scrollLeft ? <i className='fas fa-chevron-left fa-2x riac-left-button' onClick={() => {this.slideLeft(); context.click('Related Products Button Left', 'Related Products')}} alt='Move related products list to the right'></i> : null}

              {this.state.maxScrollLeft === 0 || this.state.maxScrollLeft === this.state.scrollLeft
                ? null : <i className='fas fa-chevron-right fa-2x riac-right-button' onClick={() => {this.slideRight(); context.click('Related Products Button Right', 'Related Products')}} alt='Move related products list to the right'></i>}

              <div className='riac-container'>

                <div className='riac-related-products' id='riac-carousel'>

                  {related.map((productid) => {
                    return <RelatedProductCard product={this.props.product} productid={productid} onClick={this.props.onClick} />
                  })}

                </div>
              </div>
            </div>


            <div className='riac-carousel' id='outfit'>

              <div className='riac-productcard-header'>
                YOUR OUTFIT
              </div>

              {this.state.outfitScroll ? <i className='fas fa-chevron-left fa-2x riac-left-button' onClick={() => {this.outfitSlideLeft(); context.click('Outfit Button Left', 'Related Products')}} alt='Move outfit list to the left'></i> : null}

              {this.state.outfitMaxScroll === 0 || this.state.outfitMaxScroll === this.state.outfitScroll
                ? null : <i className='fas fa-chevron-right fa-2x riac-right-button' onClick={() => {this.outfitSlideRight(); context.click=('Outfit Button Right', 'Related Products')}} alt='Move outfit list to the right'></i>}

              <div className='riac-container'>

                <div className='riac-related-products' id='outfit-carousel'>

                  <AddOutfit onClick={this.addToOutfit} />

                  {this.state.storage ? this.state.storage.map((productid) => {
                    return <OutfitCard productid={productid} onClick={this.props.onClick} removeOutfit={this.removeOutfit} />
                  }) : null}

                </div>
              </div>
            </div>

          </div>
        )
      }}
      </TrackClickContext.Consumer>
    )
  }
}

export default RelatedProducts;