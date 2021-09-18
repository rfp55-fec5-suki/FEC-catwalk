import React, { useState } from 'react';
import './AddReview.css';
import Modal from '../Modal.jsx';
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
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//////////////
//MAIN FORM//
/////////////
var rating;
var recommend;
var characteristics = {};
var charsByID = {};
var summary;
var name;
var email;
var notComplete = [];
var imageUrl;
var images = [];
const AddReview = (props) => {
  var charsArr = [];
  for (var key in props.chars) {
    charsArr.push({
      details: charDetails[key],
      id: props.chars[key].id,
      name: key
    });
  }
  //////////////////////////////////
  //Handlers to record user inputs//
  /////////////////////////////////
  var setRecommend = (e) => {
    recommend = e.target.value;
  }
  var setSummary = (e) => {
    summary = e.target.value;
  }
  var setBody = (e) => {
    setBodyState(e.target.value);
  }
  var setImageUrl = (e) => {
    imageUrl = e.target.value
  }
  var submitImage = () => {
    if (imageUrl) {
      images.push(imageUrl);
      hideModal();
    }
  }
  var setName = (e) => {
    name = e.target.value;
  }
  var setEmail = (e) => {
    email = e.target.value;
  }
  var submit = () => {
    setUnfinished([]);
    setRatingColor('black');
    setRecommendColor('black');
    setCharsColor('black');
    setSummaryColor('black');
    setBodyColor('black');
    setNameColor('black');
    setEmailColor('black')
    notComplete = [];
    var result = {
      rating: rating,
      recommend: recommend,
      characteristics: charsByID,
      summary: summary,
      body: body,
      photos: images,
      name: name,
      email: email
    }
    ///////////////////////////////////////////
    //check if mandatory values are filled in//
    ///////////////////////////////////////////
    if (!rating) {
      notComplete.push('rating');
      setRatingColor('red')
    }
    if (!recommend) {
      notComplete.push('recommend');
      setRecommendColor('red');
    }
    for (var i = 0; i < charsArr.length; i++) {
      if (!characteristics[charsArr[i].name]) {
        notComplete.push(charsArr[i].name);
        setCharsColor('red')
      }
    }
    if (!summary) {
      notComplete.push('summary');
      setSummaryColor('red');
    }
    if (!body) {
      notComplete.push('body');
      setBodyColor('red')
    } else if (body.length < 50) {
      notComplete.push('body');
      setBodyColor('red')
    }
    if (!name) {
      notComplete.push('nickname');
      setNameColor('red');
    }
    if (!email) {
      notComplete.push('email');
      setEmailColor('red')
    } else if (!validateEmail(email)) {
      notComplete.push('please enter valid email');
      setEmailColor('red')
    }
    console.log(result)
    console.log(notComplete);
    if (notComplete.length === 0) {
      console.log(result)
      props.close();
    } else {
      setUnfinished(notComplete);
    }
  }
  ////////////////////
  //state management//
  ////////////////////
  const [body, setBodyState] = useState();
  const [unfinished, setUnfinished] = useState([]);
  const [ratingColor, setRatingColor] = useState('black');
  const [recommendColor, setRecommendColor] = useState('black');
  const [charsColor, setCharsColor] = useState('black');
  const [summaryColor, setSummaryColor] = useState('black');
  const [bodyColor, setBodyColor] = useState('black');
  const [nameColor, setNameColor] = useState('black');
  const [emailColor, setEmailColor] = useState('black');
  ///////////////////////
  // Add pictures modal//
  ///////////////////////
  const [showModal, setShowModal] = useState(false);
  const renderModal = () => {
    setShowModal(true);
  }
  const hideModal = () => {
    setShowModal(false);
  }
  return (
    <div className='add-review-form' >
      <div className='form-title'>
        <h2>Add Review</h2>
        {unfinished ? `You must fill out the following sections: ${unfinished.join(', ')}` : null}<br />
      </div>
      <div className='overall-rating'>
        <span style={{ color: ratingColor }}>Overall rating*</span><br />
        <StarSelect />
      </div>
      <div className='form-recommend'>
        <span style={{ color: recommendColor }}>Do you recommend this product?*</span><br />
        <div onChange={setRecommend}>
          <input type='radio' name='rec' id='rec-yes' value={true} />
          <label for='rec-yes'>yes</label>
          <input type='radio' name='rec' id='rec-no' value={false} />
          <label for='rec-no'>no</label>
        </div>
      </div>
      <div className='form-chars'>
        <span style={{ color: charsColor }}>Characteristics*</span><br />
        {charsArr.map((char) => <Characteristic char={char} key={char.id} />)}
      </div>
      <div className='form-summary'>
        <span style={{ color: summaryColor }}>Review summary*</span><br />
        <input type='text' onChange={setSummary} maxLength='60' placeholder='Example: Best purchase ever!' /><br />
      </div>
      <div className='form-body'>
        <span style={{ color: bodyColor }}>Review body*</span><br />
        <textarea onChange={setBody} maxLength='1000' placeholder='Why did you like the product or not?' /><br />
        {body && body.length > 50 ? 'Minimum reached' : <span style={{ color: bodyColor }}>Miniumum required characters left: {body ? 50 - body.length : 50}</span>}<br />
      </div>
      <div className='form-photos'>
        Upload your photos<br />
        {images.length ? [...images.map((image) => (<img src={image} className='form-thumb' />)), <br />] : null}
        <button onClick={renderModal}>Add Photos</button><br />
      </div>
      <div className='form-name'>
        <span style={{ color: nameColor }}>What is your nickname*</span><br />
        For privacy reasons, do not use your full name or email address<br />
        <input type='text' onChange={setName} maxLength='60' placeholder='Example: jackson11!' /><br />
      </div>
      <div className='form-email'>
        <span style={{ color: emailColor }}>Your email*</span><br />
        <input type='text' onChange={setEmail} maxLength='60' placeholder='Example: jackson11@email.com' /><br />
        For authentication reasons, you will not be emailed <br />
      </div>
      <div className='form-submit'>
        <button onClick={submit}>Submit review</button>
      </div>

      <Modal show={showModal} handleClose={hideModal}
        children={(
          <div className='add-image-modal'>
            <div className='image-modal-title'>Add Image</div>
            <div className='image-modal-input'>
              <input type='text' placeholder='Image Url...' onChange={setImageUrl} className='modal-url'/><br />
            </div>
            <div className='image-modal-submit'>
              <button onClick={submitImage}>Submit image</button>
            </div>
          </div>)} />
    </div >
  )
}
///////////////////////////////////
//SELECT OVERALL RATING COMPONENT//
///////////////////////////////////
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
      <img src={ratingArr[0]} onClick={() => selectRating(1)} className='form-star' />
      <img src={ratingArr[1]} onClick={() => selectRating(2)} className='form-star' />
      <img src={ratingArr[2]} onClick={() => selectRating(3)} className='form-star' />
      <img src={ratingArr[3]} onClick={() => selectRating(4)} className='form-star' />
      <img src={ratingArr[4]} onClick={() => selectRating(5)} className='form-star' />
      <span>{ratingExpl}</span>
    </div>
  )
}
///////////////////////////////////
//CHARACTERISTICS RADIO COMPONENT//
///////////////////////////////////
const Characteristic = (props) => {
  const setChar = (e) => {
    characteristics[props.char.name] = e.target.value;
    charsByID[props.char.id] = e.target.value;
  }
  return (
    <div onChange={setChar} className='char-main'>
      <div className='char-name'>
        {props.char.name}
      </div>
      <div className='char-radio'>
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
    </div>
  )
}
export default AddReview;