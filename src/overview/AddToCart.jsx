import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    // Make selectedStyle a state so we can control when this is updated (e.g. make sure  sku and quantity are always reset when updating the selected style).
    this.state = { selectedStyle: this.props.selectedStyle, sku: "", quantity: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.setState({ selectedStyle: this.props.selectedStyle, sku: "", quantity: "" });
    }
  }

  handleSizeSelection(e) {
    this.setState({ sku: e.target.value });
  }

  handleQuantityChange(e) {
    this.setState({ quantity: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ sku: "", quantity: "" });
  }
  render() {
    var skus = this.state.selectedStyle.skus;

    let sizeSelections = [];
    for (var sku in skus) {
      sizeSelections.push(<option value={sku}>{skus[sku].size}</option>);
    }

    const maxQuantity = this.state.sku === "" ? 0 : skus[this.state.sku].quantity;
    let quantityOptions = [];
    for (var i = 1; i <= maxQuantity; i++) {
      quantityOptions.push(<option value={i}>{i}</option>)
    }

    return (
      <form class='addToCart' onSubmit={this.handleSubmit.bind(this)}>

          <select id='selectSize' value={this.state.sku} onChange={this.handleSizeSelection.bind(this)}>
            <option value="">SELECT SIZE</option>
            <React.Fragment>{sizeSelections}</React.Fragment>
          </select>

          <select id='selectQuantity' value={this.state.selectedQuantity} onChange={this.handleQuantityChange.bind(this)}>
            <option value="0">QUANTITY</option>
            <React.Fragment>{quantityOptions}</React.Fragment>
          </select>

        <input id='buyButton' type='submit' value='+ ADD TO BAG' disabled={this.state.sku === "" || this.state.quantity === "" || this.state.quantity === "0"} />
      </form>
    );

  }
}

export default AddToCart;