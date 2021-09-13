import React from 'react';
import ReviewList from './ReviewList.jsx'
import mockData from './mockData.js';
import './RatingsReviews.css';
var reviews = mockData.getReviews.results;

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="rr-main">
        RATINGS AND REVIEWS
        <ReviewList reviews={reviews}/>
      </div>
    )
  }
}

export default RatingsReviews;