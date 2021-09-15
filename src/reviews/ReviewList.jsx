import React, { useState } from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  // const [nReviews, setNReviews] = useState(2)

  return (
  <div className='review-list'>
    <div className='sort'>
      Sort Reviews by
    {/* </div> */}
    {/* <div className='sort-select'> */}
    <select onChange={props.sort} >
      <option value='relevant'>Relevent</option>
      <option value='newest'>Newest</option>
      <option value='helpful'>Helpful</option>
    </select>
    </div>
    <div className='rr-tile-list'>
    {reviews.map((review) => <ReviewTile review={review} key={review.review_id}/>)}
    </div>
    {props.renderButton ? <button className='rr-button more-reviews' onClick={props.more}>More Reviews</button> : null}
    <button className='rr-button add-review'>Add Review +</button>
  </div>
  );
}


export default ReviewList;
