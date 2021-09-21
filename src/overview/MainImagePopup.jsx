import React, { useState } from 'react';

const POPUP_STYLES = {
  position: 'fixed',
  width: '90%',
  height: '90%',
  padding: '3%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, -7)',
  zIndex: 1000
}

export default function MainImagePopup({ openPopup, children, closePopup, stylePhotos, currentIndex }) {
    if (!openPopup) {
      return null;
    } else {
      return (
        <div style={OVERLAY_STYLES}>
          <div class='mainImagePopup' class='mainImagePopup'   style={POPUP_STYLES}>
            <button onClick={closePopup}>Close popup</button>
            {children}
            <img src={stylePhotos[currentIndex].url}></img>
          </div>
        </div>

      )
    }
}