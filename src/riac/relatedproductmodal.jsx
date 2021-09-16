import React from 'react';

class RelatedProductModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: '',
      selected: ''
    }
  }

  render() {
    this.state.product = this.props.product;
    this.state.selected = this.props.selected;
    return(
      <div className='riac-modal'>
        {console.log('product', this.props.product)}
        {console.log('selected', this.props.selected)}
      </div>
    )
  }
}

export default RelatedProductModal;