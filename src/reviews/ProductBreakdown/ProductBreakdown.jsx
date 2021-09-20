import React from 'react';
import pointer from './pointer.svg';
import './ProductBreakdown.css';

const CharBar = (props) => {
  return (
    <div className='char-bar'>
      <img src={pointer} className='pointer' style={{ marginLeft: `${props.percent}%` }} />
      <div className='bar-segment left-bar' />
      <div className='bar-segment middle-bar' />
      <div className='bar-segment right-bar' />
    </div>
  )
}
const Characteristic = (props) => {
  return (
    <div className='characteristic'>
      <span className='char-name'>{props.name}</span>
      <CharBar percent={props.percent} />
      <span className='char-low'>{props.low}</span>
      <span className='char-mid'>{props.mid}</span>
      <span className='char-high'>{props.high}</span>
    </div>
  )
}

const ProductBreakdown = (props) => {
  var charsArray = [];
  for (var key in props.chars) {
    var name = key;
    if (name === 'Size') {
      var high = 'Too large';
      var mid = 'Perfect';
      var low = 'Too small';
    } else if (name === 'Width') {
      var high = 'Too wide';
      var mid = 'Perfect';
      var low = 'Too narrow';
    } else if (name === 'Comfort') {
      var high = 'Perfect';
      var mid = 'Ok';
      var low = 'Uncomfortable';
    } else if (name === 'Quality') {
      var high = 'High';
      var mid = 'What I expected';
      var low = 'Low';
    } else if (name === 'Length') {
      var high = 'Too long';
      var mid = 'Perfect';
      var low = 'Too short';
    } else if (name === 'Fit') {
      var high = 'Runs long';
      var mid = 'Perfect';
      var low = 'Runs tight';
    } else {
      var high = 'High';
      var mid = 'Mid';
      var low = 'Low';
    }
    var percent = ((props.chars[key].value / 5) * 100).toFixed(0);
    charsArray.push(<Characteristic name={name} high={high} mid={mid} low={low}
      percent={percent} key={props.chars[key].id} />)
  }
  // console.log(props.meta.characteristics)
  return (
    <div className='product-breakdown'>

      {charsArray}
      {/* <Characteristic /> */}
      {/* <CharBar /> */}


    </div>
  )
}

export default ProductBreakdown;