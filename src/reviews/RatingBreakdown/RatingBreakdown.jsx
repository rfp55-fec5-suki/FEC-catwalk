import React from 'react';
import StarRating from './../../sharedComponents/StarRating.jsx'

const RatingBreakdown = (props) => {
  if (props.meta.ratings) {
    console.log(props.meta)

    var netRating = 0;
    var nRatings = 0;
    for (var key in props.meta.ratings) {
      netRating += parseInt(key) * parseInt(props.meta.ratings[key]);
      nRatings += parseInt(props.meta.ratings[key]);
    }
    var rating = netRating / nRatings;
    // console.log(props.meta.recommended.true)
    var recPer = ((props.meta.recommended.true / nRatings) * 100).toFixed(0);
    return (
      <div><br/>
        <div>
        rating average {rating.toFixed(2)}
        <StarRating rating={rating}/>
        </div>
        {recPer}% of reviews recommend this product<br/>
        5star<br/>
        4star<br/>
        3star<br/>
        2star<br/>
        1star
      </div>
    )

  } else {
    return (
      <div><br/>
        <div>
        rating average
        <StarRating />
        </div>
        percentage of recommend
        5star
        4star
        3star
        2star
        1star
      </div>
    )
  }
};

export default RatingBreakdown;