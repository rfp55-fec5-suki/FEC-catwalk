import React, {useState} from 'react';

var ImageGallary = () => {
  return (
    <div class='imageContainer'>
      <div class='selectionImgColumn'>
        <img src='#'></img><br />
        <img src='#'></img><br />
        <img src='#'></img><br />
        <img src='#'></img><br />
        <i class="arrowDown"></i>
      </div>
      <div class='mainImg'>
        <img src='../src/overview/assets/6.jpeg'></img>
      </div>
    </div>
  );
};

export default ImageGallary;