import React from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';
import mockData from './mockData.js';
import './RatingsReviews.css';
var review = mockData.getReviews.results[1];


class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="rr-main">
        <h1>Hello R and R</h1>
        <ReviewTile review={review}/>
      </div>
    )
  }
}

export default RatingsReviews;