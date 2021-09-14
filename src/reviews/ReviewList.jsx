import React, { useState } from 'react';
// import mockData from './mockData.js'
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  const [nReviews, setNReviews] = useState(2)

  // const [state, setState] = useState({renderList: props.reviews.slice(0,2)})
  // const renderList = state.renderList;
  // console.log
  return (
  <div>
    {reviews.slice(0, nReviews).map((review) => <ReviewTile review={review} />)}
  </div>
  );
}


export default ReviewList;
