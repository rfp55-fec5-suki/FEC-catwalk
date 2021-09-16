import React from 'react';
import { RatingView } from 'react-simple-star-rating';

class OverviewInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    var product = this.props.product;
    var style = this.props.selectedStyle;

    let price;
    if (style.sale_price !== null) {
      console.log(`Sales price is ${style.sale_price}`);
      price = (
        <React.Fragment>
          <span id='salesPrice'>${style.sale_price}</span>
          <span id='originalPrice'>&nbsp;&nbsp;${style.original_price}</span>
        </React.Fragment>
        );
      } else {
        price = (
        <span>${style.original_price}</span>
      )
    }


    return (
      <div class='overviewInformation'>
        <p><RatingView ratingValue={3} /> <a href='#'>Read all reviews</a> </p>
        <h4>{product.category}</h4>
        <h2>{product.name}</h2>
        {price}
      </div>
    );
  }
}

export default OverviewInformation;