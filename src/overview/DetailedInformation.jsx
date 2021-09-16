import React from 'react';
import { RatingView } from 'react-simple-star-rating';

class DetailedInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='detailedInformation'>
        <div class='infoFreeText'>
          <h3>{this.props.product.slogan}</h3>
          <p>{this.props.product.description}</p>
        </div>

        <div class='infoHighlights'>
          <span>&#10004; Basic Solid Color<br/></span>
          <span>&#10004; Lightweight Stretchy Waffle Knit<br/></span>
          <span> &#10004; Great for Spring, Fall, Cool day</span>
        </div>
      </div>
    );
  }
}

export default DetailedInformation;