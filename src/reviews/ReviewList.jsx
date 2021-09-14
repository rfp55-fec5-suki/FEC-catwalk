import React, { useState } from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  const [nReviews, setNReviews] = useState(2)

  return (
  <div>
    {reviews.slice(0, nReviews).map((review) => <ReviewTile review={review} />)}
  </div>
  );
}


export default ReviewList;
