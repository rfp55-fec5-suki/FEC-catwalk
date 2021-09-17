import React from 'react';

const ModalComparison = (props) => (
  <div className='riac-modal-feature-grid'>
    <div className='riac-modal-feature-current'>
      check
    </div>

    <div className='riac-modal-feature'>
      {`${props.feature.value} ${props.feature.feature}`}
    </div>

    <div className='riac-modal-feature-compared'>
      {props.compared ? props.compared.map((feature) => {
        return `${feature.value} ${feature.feature}` === `${props.feature.value} ${props.feature.feature}` ? 'check' : null
      }) : null}
    </div>
  </div>
)

export default ModalComparison;