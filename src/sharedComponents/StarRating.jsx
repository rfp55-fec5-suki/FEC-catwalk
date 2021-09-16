import React, { useState } from 'react';
import {
  empty,
  quarter,
  half,
  threeQuarter,
  full
} from './Stars/starsIndex.js';
/////////////////////////////////////////////////
//INPUTS
//takes in either single rating as props.rating
// <StarRating rating={4} />
//
//or meta rating object as props.meta
//<StarRating Meta={{
// 5: 17,
// 4: 10,
// 3: 4,
// ...
// }}
/////////////////////////////////////////////////
const StarRating = (props) => {
  if (props.rating) {
    var rating = props.rating;
  } else if (props.meta) {
    var netRating = 0;
    var nRatings = 0;
    for (var key in props.meta) {
      var ratingValue = parseInt(key);
      netRating += parseInt(key) * parseInt(props.meta[key]);
      nRatings += parseInt(props.meta[key]);
    }
    var rating = netRating / nRatings;
  } else {
    var rating = 0;
  }
  var stars = [];
  var fraction = (rating % 1).toFixed(2)
  //set full stars to be rendered
  for(var i = 1; i <= rating; i++) {
    stars.push(full)
  }
  //set the one factional star if needed
  if(fraction >= .75) {
    stars.push(threeQuarter);
  } else if (fraction >= .5) {
    stars.push(half);
  } else if (fraction >= .25) {
    stars.push(quarter);
  }
  //set remaining stars to be empty
  while(stars.length < 5) {
    stars.push(empty);
  }
  return (
    <div>
      <img src={stars[0]} className='star'/>
      <img src={stars[1]} className='star'/>
      <img src={stars[2]} className='star'/>
      <img src={stars[3]} className='star'/>
      <img src={stars[4]} className='star'/>
    </div>
  )
}

export default StarRating;