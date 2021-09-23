import React from 'react';
import { RatingView } from 'react-simple-star-rating';

class OverviewInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const product = this.props.product;
    const style = this.props.selectedStyle;

    let price;
    if (style.sale_price !== null) {
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
        <p><RatingView ratingValue={3} /> <a href='#review-section'>Read all reviews</a> </p>
        <h4>{product.category}</h4>
        <h2>{product.name}</h2>
        {price}
      </div>
    );
  }
}

export default OverviewInformation;