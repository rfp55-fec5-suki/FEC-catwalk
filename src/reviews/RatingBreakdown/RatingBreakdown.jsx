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
    var recPer = (((props.meta.recommended.true) / nRatings) * 100);
    //Star number percentages----------------
    var starValues = {}
    for (var i = 1; i <= 5; i++) {
      if (props.meta.ratings[i]) {
        var ratingsByValue = parseInt(props.meta.ratings[i])
        var percent = ((ratingsByValue / nRatings) * 100).toFixed(0);
        starValues[i] = { percent: percent, quantity: ratingsByValue };
      } else {
        starValues[i] = {percent: 0, quantity: 0}
      }
    }
    return (
      <div><br />
        <div>
          rating average {rating ? rating.toFixed(1) : 0}
          <StarRating rating={rating} />
        </div>
        {recPer ? recPer.toFixed(0) : 0}% of reviews recommend this product<br />
        <div>
          <div>
          <span onClick={() => props.filter(5)}>5 star</span><RatingBar percentage={starValues[5].percent} /> {starValues[5].quantity}<br/>
          </div>
          <div>
          <span onClick={() => props.filter(4)}>4 star</span><RatingBar percentage={starValues[4].percent} /> {starValues[4].quantity}<br/>
          </div>
          <div>
          <span onClick={() => props.filter(3)}>3 star</span><RatingBar percentage={starValues[3].percent} /> {starValues[3].quantity}<br/>
          </div>
          <div>
          <span onClick={() => props.filter(2)}>2 star</span><RatingBar percentage={starValues[2].percent} /> {starValues[2].quantity}<br/>
          </div>
          <div>
          <span onClick={() => props.filter(1)}>1 star</span><RatingBar percentage={starValues[1].percent} /> {starValues[1].quantity}<br/>
          </div>
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