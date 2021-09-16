import React from 'react';
import './RatingBar.css';
const RatingBar = (props) => {
  if (props.percentage) {
  var percentage = props.percentage
  } else {
    var percentage = 0;
  }
  return (
    <div className='rating-bar'>
      <Filler percentage={percentage}/>
    </div>
  )
}
const Filler = (props) => {
  return <div className='filler' style={{width: `${props.percentage}%`}} />
}
export default RatingBar;