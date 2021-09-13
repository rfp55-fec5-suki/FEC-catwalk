import React from 'react';
// import mockData from './mockData.js'
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviewList = props.reviews;
  return (
  <div>
    <ReviewTile review={reviewList[0]}/>
    <ReviewTile review={reviewList[1]}/>
  </div>
  )
};

export default ReviewList;
