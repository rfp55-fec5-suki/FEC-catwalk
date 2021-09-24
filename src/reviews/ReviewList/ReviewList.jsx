import React, { useState } from 'react';
import ReviewTile from '../reviewTile/ReviewTile.jsx';
import circleX from './CircledX.svg';
import './ReviewList.css'
import { TrackClickContext } from '../../trackClick.jsx';

var userSearch = '';
const ReviewList = (props) => {
  var reviews = props.reviews;
  if (props.meta.recommended) {
    var nReviews = parseInt(props.meta.recommended.false) + parseInt(props.meta.recommended.true);
  } else {
    var nReviews = 0;
  }

  return (
    <TrackClickContext.Consumer>{(context) => {
      return (
        <div className='review-list'>
          <div className='rr-sort'>
            {nReviews ? nReviews : 0} reviews, sorted by
            <select onChange={props.sort} onClick={() => context.click('reviews_sort_select', 'reviews')}>
              <option value='relevant'>Relevant</option>
              <option value='newest'>Newest</option>
              <option value='helpful'>Helpful</option>
            </select>
            {props.filter.length > 0 ? (<span><br /> and {props.filter.map((rating) => {
              return (<span onClick={() => {
                props.setFilter(rating)
                context.click('review_list_rating_filter_toggle', 'reviews')
                }} className='filter-display'>
                {rating} Stars<img src={circleX} className='x' /></span>)
            })}</span>) : null}
          </div>
          <div className='keyword-search'>
            <input type='text' onChange={props.keywordChange} onClick={() => context.click('reviews_search_bar', 'reviews')}
            placeholder='search reviews' />
          </div>
          <div className='rr-tile-list'>
            {reviews.map((review) => <ReviewTile review={review} key={review.review_id}
              markHelpful={props.markHelpful} report={props.report} helped={props.helped} />)}
          </div>
          <div className='rr-button-bar'>
            <button className='rr-button add-review' onClick={(e) => {
              props.addReview(e);
              context.click('add_review_button', 'reviews');
            }}>Add Review +</button>
            {props.renderButton ? <button className='rr-button more-reviews' onClick={(e) => {
              props.more(e);
              context.click('more_reviews_button', 'reviews');
            }}>More Reviews</button> : null}
          </div>
        </div>)
    }}
    </TrackClickContext.Consumer>
  );
}


export default ReviewList;