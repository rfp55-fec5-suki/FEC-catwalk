import React, { useState } from 'react';
// import mockData from './mockData.js'
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  const [state, setState] = useState({renderList: props.reviews.slice(0,2)})
  const renderList = state.renderList;
  return (
  <div>
    hooks yay
    {renderList.map((review) => <ReviewTile review={review} />)}
  </div>
  );
}


export default ReviewList;
