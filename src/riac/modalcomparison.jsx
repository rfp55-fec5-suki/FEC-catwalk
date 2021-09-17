import React from 'react';

const ModalComparison = (props) => (
  <div className='riac-modal-feature'>
    {`${props.feature.value} ${props.feature.feature}`}
  </div>
)

export default ModalComparison;