import React from 'react';
import '../riac.css'
import { TrackClickContext } from './../../trackClick.jsx';

const RelatedProductModal = ({ handleClose, show, children }) => {
  const displayModal = show ? "riac-display-block" : "riac-display-none";

  return (
    <TrackClickContext.Consumer>{(context) => {
      return (
        <div className={displayModal}>
          <div className="riac-modal-main">
            {children}
            <button type="button" className='riac-modal-close' onClick={() => {handleClose(); context.click('Close Modal Button', 'Related Products')}} alt='Close comparison modal'>
              Close
            </button>
          </div>
        </div>
      )
    }}
    </TrackClickContext.Consumer>
  );
};

export default RelatedProductModal;