import React from 'react';
import RelatedProductCard from './relateditems/relatedproductcard.jsx';
import RelatedProductModal from './relateditems/relatedproductmodal.jsx';
import initialRelated from '../initialRelated.js';
import $ from 'jquery';

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
    this.updateButtons();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.fetchStorage();
      this.updateButtons();
    }
  }


  render() {
    var related = this.props.related.length === 0 ? initialRelated : this.props.related;

    return (
      <div>

        <div className='riac-carousel'>

          <div className='riac-productcard-header'>
            RELATED PRODUCTS
          </div>


          {this.state.scrollLeft ? <i className='fas fa-chevron-left fa-2x riac-left-button' onClick={this.slideLeft}></i> : null}

          {this.state.maxScrollLeft === 0 || this.state.maxScrollLeft === this.state.scrollLeft
            ? null : <i className='fas fa-chevron-right fa-2x riac-right-button' onClick={this.slideRight}></i>}

          <div className='riac-container'>

            <div className='riac-related-products' id='riac-carousel'>

              {related.map((productid) => {
                return <RelatedProductCard product={this.props.product} productid={productid} onClick={this.props.onClick} />
              })}

              {/* {console.log('in return scrolleft', this.state.scrollLeft)}
              {console.log('in return max', this.state.maxScrollLeft)} */}


            </div>
          </div>
        </div>


        <div className='riac-carousel'>

          <div className='riac-productcard-header'>
            YOUR OUTFIT
          </div>

          {this.state.outfitScroll ? <i className='fas fa-chevron-left fa-2x riac-left-button' onClick={this.outfitSlideLeft}></i> : null}
          {this.state.outfitMaxScroll === 0 || this.state.outfitMaxScroll === this.state.outfitScroll
            ? null : <i className='fas fa-chevron-right fa-2x riac-right-button' onClick={this.outfitSlideRight}></i>}

          <div className='riac-container'>

            <div className='riac-related-products' id='outfit-carousel'>

              <AddOutfit onClick={this.addToOutfit} />

              {this.state.storage ? this.state.storage.map((productid) => {
                return <OutfitCard productid={productid} onClick={this.props.onClick} removeOutfit={this.removeOutfit} />
              }) : null}

              {/* {console.log('in return outfitscroll', this.state.outfitScroll)}
              {console.log('in return outfitmax', this.state.outfitMaxScroll)} */}

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default RelatedProducts;