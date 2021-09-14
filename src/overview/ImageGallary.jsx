import React, {useState} from 'react';

var ImageGallary = () => {
  return (
    <div class='imageContainer'>
      <div class='selectionImgColumn'>
        <img src='../src/overview/assets/4.jpg'></img><br />
        <img src='../src/overview/assets/5.jpg'></img><br />
        <img src='../src/overview/assets/7.jpg'></img><br />
        <img src='../src/overview/assets/8.jpg'></img><br />
        <i class="arrowDown"></i>
      </div>
      <div class='mainImg'>
        <img src='../src/overview/assets/10.jpg'></img>
      </div>
    </div>
  );
};

export default ImageGallary;