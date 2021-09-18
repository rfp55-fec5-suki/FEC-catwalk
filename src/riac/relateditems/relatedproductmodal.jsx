import React from 'react';
import '../riac.css'

const RelatedProductModal = ({ handleClose, show, children }) => {
  const displayModal = show ? "riac-display-block" : "riac-display-none";

  return (
    <div className={displayModal}>
      <div className="riac-modal-main">
        {children}
        <button type="button" className='riac-modal-close' onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RelatedProductModal;