import React from 'react';
import './riac.css'

class RelatedProductModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      product: '',
      selected: ''
    }
  }


  render() {
    displayModal = show ? 'modal display-block' : 'modal display-none';

    this.state.product = this.props.product;
    this.state.selected = this.props.selected;
    return (
      <div className={displayModal}>
        <div className='modal-main'>
          <div className='riac-modal'>
            <div className='riac-modal-grid'>
              {/* <h1>Comparing</h1> */}

              {console.log('product', this.props.product)}
              {console.log('selected', this.props.selected)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedProductModal;