import React, { useState } from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  // const [nReviews, setNReviews] = useState(2)

  return (
  <div>
    <div>
      Sort Reviews by
    <select onChange={props.sort}>
      <option value='relevant'>Relevent</option>
      <option value='newest'>Newest</option>
      <option value='helpful'>Helpful</option>
    </select>
    </div>
    {reviews.map((review) => <ReviewTile review={review} key={review.review_id}/>)}
    {props.renderButton ? <button className='more-reviews' onClick={props.more}>More Reviews</button> : null}
    <button>Add Review +</button>
  </div>
  );
}


export default ReviewList;
