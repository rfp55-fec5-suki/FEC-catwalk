import React, {useState} from 'react';
import { RatingView } from 'react-simple-star-rating';

var DetailedInformation = () => {
  return (
    <div class='detailedInformation'>
      <div class='infoFreeText'>
        <h3>Product Slogan. Pithy Description or Catchphrase</h3>
        <p>
          This is a paragraph of product description. I copied from Am
          nOversized boyfriend cardigan, dolman sleeves with sewn c
          sslouchy relax fit, cozy chunky waffle knit, shawl collar, bas
          coon cardigan, below hip length, solid color, stretchy
          bricEveryone needs a cozy and stylish cardigan! The coat is n
          tothick or too thin, perfect for between months and chil
          fall dayAnd the length is perfect for casual wear with jean
          r workweawith a skirt, dress pants. It is such a wonderful all-aro  iteand a must-have ffall and winter attire.So comfy cardigan top!
        </p>
      </div>

      <p class='infoHighlights'>
        &#10004; Basic Solid Color<br/>
        &#10004; Lightweight Stretchy Waffle Knit<br/>
        &#10004; Great for Spring, Fall, Cool day
      </p>
    </div>
  );
};

export default DetailedInformation;