import React, { useState } from 'react';
import {
  empty,
  quarter,
  half,
  threeQuarter,
  full
} from './Stars/starsIndex.js';

const StarRating = (props) => {
  var stars = [];
  var fraction = (props.rating % 1).toFixed(2);
  for(var i = 1; i <= props.rating; i++) {
    stars.push(full)
  }
  if(fraction >= .75) {
    stars.push(threeQuarter);
  } else if (fraction >= .5) {
    stars.push(half);
  } else if (fraction >= .25) {
    stars.push(quarter);
  }
  while(stars.length < 5) {
    stars.push(empty);
  }
  return (
    <div>
      <img src={stars[0]} />
      <img src={stars[1]} />
      <img src={stars[2]} />
      <img src={stars[3]} />
      <img src={stars[4]} />
    </div>
  )
}

export default StarRating;