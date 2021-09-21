import React, { useState } from 'react';
import ReviewTile from '../reviewTile/ReviewTile.jsx';
import circleX from './CircledX.svg';
import './ReviewList.css'

var userSearch = '';
const ReviewList = (props) => {
  var reviews = props.reviews;
  if (props.meta.recommended) {
    var nReviews = parseInt(props.meta.recommended.false) + parseInt(props.meta.recommended.true);
  } else {
    var nReviews = 0;
  }

  return (
    <div className='review-list'>
      <div className='rr-sort'>
        {nReviews ? nReviews : 0} reviews, sorted by
        <select onChange={props.sort} >
          <option value='relevant'>Relevant</option>
          <option value='newest'>Newest</option>
          <option value='helpful'>Helpful</option>
        </select>
<<<<<<< HEAD
        {props.filter.length > 0 ? (<span><br/>and {props.filter.map((rating) => {
=======
        {props.filter.length > 0 ? (<span><br/> and {props.filter.map((rating) => {
>>>>>>> 1d93fbf8587036002977ee209aee57392be3db36
          return (<span onClick={() => props.setFilter(rating)} className='filter-display'>
            {rating} Stars<img src={circleX} className='x' /></span>)
        })}</span>) : null}
      </div>
      <div className='keyword-search'>
        <input type='text' onChange={props.keywordChange} placeholder='search reviews' />
      </div>
      <div className='rr-tile-list'>
        {reviews.map((review) => <ReviewTile review={review} key={review.review_id}
          markHelpful={props.markHelpful} report={props.report} />)}
      </div>
      <div className='rr-button-bar'>
        <button className='rr-button add-review' onClick={props.addReview}>Add Review +</button>
        {props.renderButton ? <button className='rr-button more-reviews' onClick={props.more}>More Reviews</button> : null}
      </div>
    </div>
  );
}


export default ReviewList;
