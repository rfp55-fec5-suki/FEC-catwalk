import React from 'react';

const AddOutfit = (props) => (
  <div className='outfit-card'>

    <i className='fas fa-plus outfit-button' onClick={props.onClick}></i>

    <div className='outfit-card-description'>
      Add to Outfit
    </div>

  </div>
)




export default AddOutfit;