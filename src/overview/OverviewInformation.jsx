import React, {useState} from 'react';
import { RatingView } from 'react-simple-star-rating';

var OverviewInformation = () => {
  return (
    <div class='overviewInformation'>
      <p><RatingView ratingValue={3} /> <a href='#'>Read all reviews</a> </p>
      <h4>CATEGORY</h4>
      <h2>Expanded Product Name</h2>
      <p>$369</p>
    </div>
  );
};

export default OverviewInformation;