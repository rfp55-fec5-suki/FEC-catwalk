import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSizeSelection(e) {
    this.setState( {maxQuantity: e.target.value})
  }

  render () {
    var options = this.props.selectedStyle.skus;

    let sizeSelections = [];
    for (var k in options) {
      sizeSelections.push(<option value={options[k].quantity}>{options[k].size}</option>)
    }

    let quantityOptions = [];
    for (var i = 1; i <= this.state.maxQuantity; i++) {
      quantityOptions.push(<option value={options[k].quantity}>{i}</option>)
    }

    return (
      <form class='addToCart'>
        <div id='values'>
          <select id='selectSize' onChange={this.handleSizeSelection.bind(this)}>
            <option>SELECT SIZE</option>
            <React.Fragment>{sizeSelections}</React.Fragment>
          </select>

          <select id='selectQuantity'>
            <option>QUANTITY</option>
            <React.Fragment>{quantityOptions}</React.Fragment>
          </select>
        </div>

        <input id='buyButton' type='button' value='+ ADD TO BAG'/>
      </form>
    );

  }
}

export default AddToCart;