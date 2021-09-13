import React, {useState} from 'react';

var AddToCart = () => {
  return (
    <form class='addToCart'>
      <select id='selectSize'>
        <option>SELECT SIZE</option>
      </select>

      <select id='selectQuantity'>
        <option>1</option>
      </select>

      <input type='button' value='ADD TO BAG +'/>
    </form>
  );
};

export default AddToCart;