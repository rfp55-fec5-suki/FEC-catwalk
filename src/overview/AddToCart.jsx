import React, {useState} from 'react';

var AddToCart = () => {
  return (
    <form class='addToCart'>
      <div id='values'>
        <select id='selectSize'>
          <option>SELECT SIZE</option>
        </select>

        <select id='selectQuantity'>
          <option>1</option>
        </select>
      </div>

      <input type='button' value='ADD TO BAG +'/>
    </form>
  );
};

export default AddToCart;