import React from 'react';
import './Q&A.css';

// class Modal extends React.Component {
//   constructor(props) {
//     super (props);
//     this.state = {
//       modalView: false;
//     }
//   }
// }

const Modal = (props) => {
  const handleClose = props.handleClose;
  const show = props.show;
  const children = props.children;
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button type='submit' onClick={handleClose}>
          Submit
        </button>
      </section>
    </div>
  )
}

export default Modal;