import React from 'react';
import { TrackClickContext } from './../../trackClick.jsx';

const AddOutfit = (props) => (
  <TrackClickContext.Consumer>{(context) => {
    return (
      <div className='outfit-card'>

        <i className='fas fa-plus outfit-button' onClick={() => {props.onClick(); context.click('Add Outfit Button', 'Related Products')}}></i>

        <div className='outfit-card-description'>
          Add to Outfit
        </div>

      </div>
    )
  }}
  </TrackClickContext.Consumer>
)




export default AddOutfit;