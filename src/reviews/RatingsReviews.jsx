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
        RATINGS AND REVIEWS
        <ReviewTile review={review}/>
      </div>
    )
  }
}

export default RatingsReviews;