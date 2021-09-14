import React, { useState } from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  // const [nReviews, setNReviews] = useState(2)

  return (
  <div>
    {reviews.map((review) => <ReviewTile review={review} key={review.review_id}/>)}
    <button className='more-reviews' onClick={props.more}>More Reviews</button>
  </div>
  );
}


export default ReviewList;
