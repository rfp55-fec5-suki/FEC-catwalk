import React from 'react';
import StarRating from './../../sharedComponents/StarRating.jsx'
import RatingBar from './RatingBar.jsx';
import './RatingBreakdown.css';


const RatingBreakdown = (props) => {
  if (props.meta.ratings) {
    console.log(props.meta)
    // get average rating------------------------
    var netRating = 0;
    var nRatings = 0;
    for (var key in props.meta.ratings) {
      netRating += parseInt(key) * parseInt(props.meta.ratings[key]);
      nRatings += parseInt(props.meta.ratings[key]);
    }
    var rating = netRating / nRatings;
    //Reommended Percent ----------------------
    var recPer = (((props.meta.recommended.true) / nRatings) * 100);
    //Star number percentages----------------
    var starValues = {}
    for (var i = 1; i <= 5; i++) {
      if (props.meta.ratings[i]) {
        var ratingsByValue = parseInt(props.meta.ratings[i])
        var percent = ((ratingsByValue / nRatings) * 100).toFixed(0);
        starValues[i] = { percent: percent, quantity: ratingsByValue };
      } else {
        starValues[i] = { percent: 0, quantity: 0 }
      }
    }
    return (
      <div className='rating-breakdown'>
        <div className='average-rating-text'>
          {rating ? rating.toFixed(1) : 0}
        </div>
        <div className='average-rating-stars'>
          <StarRating rating={rating} />
        </div>
        <div className='recommended-percent'>
          {recPer ? recPer.toFixed(0) : 0}% of reviews recommend this product
        </div>
        <div className='star-breakdown'>
          <div onClick={() => props.filter(5)} className='five-star star-filter'>
            <span className='breakdown-text'>5 star</span>
            <span className='breakdown-bar'><RatingBar percentage={starValues[5].percent} /></span>
            <span className='breakdown-number'>{starValues[5].quantity}</span>
          </div>
          <div onClick={() => props.filter(4)} className='four-star star-filter'>
            <span className='breakdown-text'>4 star</span>
            <span className='breakdown-bar'><RatingBar percentage={starValues[4].percent} /> </span>
            <span className='breakdown-number'>{starValues[4].quantity}</span>
          </div>
          <div onClick={() => props.filter(3)} className='three-star star-filter'>
            <span className='breakdown-text'>3 star</span>
            <span className='breakdown-bar'><RatingBar percentage={starValues[3].percent} /> </span>
            <span className='breakdown-number'>{starValues[3].quantity}</span>
          </div>
          <div onClick={() => props.filter(2)} className='two-star star-filter'>
            <span className='breakdown-text'>2 star</span>
            <span className='breakdown-bar'><RatingBar percentage={starValues[2].percent} /> </span>
            <span className='breakdown-number'>{starValues[2].quantity}</span>
          </div>
          <div onClick={() => props.filter(1)} className='one-star star-filter'>
            <span className='breakdown-text'>1 star</span>
            <span className='breakdown-bar'><RatingBar percentage={starValues[1].percent} /> </span>
            <span className='breakdown-number'>{starValues[1].quantity}</span>
          </div>
        </div>
        <button onClick={props.clear} className='clear-filters'>Clear filters</button>
      </div>
    )

  } else {
    return (
      <div className='rating-breakdown'>
        <div className='average-rating-text'>
          0
        </div>
        <div>
          rating average
          <StarRating />
        </div>
        <div className='average-rating-stars'>
          <StarRating />
        </div>
        <div className='recommended-percent'>
          {recPer ? recPer.toFixed(0) : 0}% of reviews recommend this product
        </div>
        <div className='star-breakdown'>
          5 stars
          4 stars
          3 stars
          2 stars
          1 star
        </div>
        <button onClick={props.clear} className='clear-filters'>Clear filters</button>
      </div>
    )
  }
};

export default RatingBreakdown;