import React, { useState } from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  var reviews = props.reviews;
  if(props.meta.recommended) {
    var nReviews = parseInt(props.meta.recommended.false) + parseInt(props.meta.recommended.true);
  } else {
    var nReviews = 0;
  }
  return (
  <div className='review-list'>
    <div className='sort'>
      {nReviews ? nReviews : 0} reviews, sorted by
    <select onChange={props.sort} >
      <option value='relevant'>Relevant</option>
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
