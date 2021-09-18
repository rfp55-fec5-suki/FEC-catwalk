import React from 'react';

const ModalComparison = (props) => (
  <div className='riac-modal-feature-grid'>
    <div className='riac-modal-feature-current'>
      {props.current ? props.current.map((feature) => {
        return `${feature.value} ${feature.feature}` === `${props.feature.value} ${props.feature.feature}` ?
        <i className="fas fa-check"></i> : null
      }) : null}
    </div>

    <div className='riac-modal-feature'>
      {`${props.feature.value} ${props.feature.feature}`}
    </div>

    <div className='riac-modal-feature-compared'>
      {props.compared ? props.compared.map((feature) => {
        return `${feature.value} ${feature.feature}` === `${props.feature.value} ${props.feature.feature}` ?
        <i className="fas fa-check"></i> : null
      }) : null}
    </div>
  </div>
)

export default ModalComparison;