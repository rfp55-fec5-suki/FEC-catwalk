import React, { useState } from 'react';
import './AddReview.css';
import {
  empty,
  full
} from '../../sharedComponents/Stars/starsIndex.js';
var charDetails = {
  Size: ['A size to small', '1/2 a size too small', 'Perfect', '1/2 size too big', 'A size too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
}
var rating;
var recommend;
var characteristics = {}
var summary;
var body;
var photos = [];
var name;
var email;
const AddReview = (props) => {
  var charsArr = [];
  for (var key in props.chars) {
    // console.log(props.chars);
    // console.log(key)
    charsArr.push({
      details: charDetails[key],
      id: props.chars[key].id,
      name: key
    });
  }
  return (
    <div className='add-review'>
      <form>
        Overall rating*<br />
        <StarSelect />
        Do you recommend this product?*<br />
        <div>
          <input type='radio' name='rec' id='rec-yes' value={true} />
          <label for='rec-yes'>yes</label>
          <input type='radio' name='rec' id='rec-no' value={false} />
          <label for='rec-no'>no</label>
        </div>
        Characteristics*<br />
        {charsArr.map((char) => <Characteristic char={char} />)}
        Review summary*<br />
        <input type='text' /><br />
        Review body*<br />
        <textarea /><br />
        Upload your photos<br />
        What is your nickname*<br />
        <input type='text' /><br />
        Your email*<br />
        <input type='text' /><br />
        <button>Submit review</button>
      </form>
    </div>
  )
}

var emptyArr = [empty, empty, empty, empty, empty];
var fullArr = [full, full, full, full, full];
var ratingExpl = '';
const StarSelect = (props) => {
  const [ratingArr, setRating] = useState(emptyArr);
  const selectRating = (value) => {
    if (value === 1) {
      ratingExpl = 'Poor';
    } else if (value === 2) {
      ratingExpl = 'Fair';
    } else if (value === 3) {
      ratingExpl = 'Average';
    } else if (value === 4) {
      ratingExpl = 'Good';
    } else if (value === 5) {
      ratingExpl = 'Great';
    }
    rating = value;
    setRating([...fullArr.slice(0, value), ...emptyArr.slice(value)]);
  }
  return (
    <div>
      <img src={ratingArr[0]} onClick={() => selectRating(1)} />
      <img src={ratingArr[1]} onClick={() => selectRating(2)} />
      <img src={ratingArr[2]} onClick={() => selectRating(3)} />
      <img src={ratingArr[3]} onClick={() => selectRating(4)} />
      <img src={ratingArr[4]} onClick={() => selectRating(5)} />
      <span>{ratingExpl}</span>
    </div>
  )
}

const Characteristic = (props) => {

  return (
    <div>
      {props.char.name}<br />
      <input type='radio' name={props.char.name} value={1} />
      {props.char.details[0]}
      <input type='radio' name={props.char.name} value={2} />
      {props.char.details[1]}
      <input type='radio' name={props.char.name} value={3} />
      {props.char.details[2]}
      <input type='radio' name={props.char.name} value={4} />
      {props.char.details[3]}
      <input type='radio' name={props.char.name} value={5} />
      {props.char.details[4]}
    </div>
  )
}
export default AddReview;