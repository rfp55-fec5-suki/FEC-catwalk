import React from 'react';
import StarRating from './../../sharedComponents/StarRating.jsx'
import RatingBar from './RatingBar.jsx';

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
    var recPer = ((props.meta.recommended.true / nRatings) * 100).toFixed(0);
    //Star number percentages----------------
    var starPercents = {}
    for (var key in props.meta.ratings) {

      var percent = ((props.meta.ratings[key] / nRatings) * 100).toFixed(0);

      starPercents[key] = percent;
      console.log(starPercents);
    }
    return (
      <div><br />
        <div>
          rating average {rating.toFixed(1)}
          <StarRating rating={rating} />
        </div>
        {recPer}% of reviews recommend this product<br />
        <div>
          5 star<RatingBar percentage={starPercents[5]} />
          4star<RatingBar percentage={starPercents[4]} />
          3star<RatingBar percentage={starPercents[3]} />
          2star<RatingBar percentage={starPercents[2]} />
          1star<RatingBar percentage={starPercents[1]} />
        </div>
      </div>
    )

  } else {
    return (
      <div><br />
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