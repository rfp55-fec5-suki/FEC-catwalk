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
  var fullStars = props.rating;
  for(var i = 1; i <= fullStars; i++) {
    stars.push(full)
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
      StarRating
    </div>
  )
}

export default StarRating;