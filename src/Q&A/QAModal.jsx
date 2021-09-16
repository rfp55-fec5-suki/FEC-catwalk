//import React from 'react';
import './Q&A.css';

// class Modal extends React.Component {
//   constructor(props) {
//     super (props);
//     this.state = {
//       modalView: false;
//     }
//   }
// }

const Modal = (props{/*{handleClose, show, children}*/}) => {
  const handleClose = this.props.handleClose;
  const show = this.props.show;
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='nodal-main'>
        {children}
        <button type='submit' onClick={handleClose}>
          Submit
        </button>
      </section>
    </div>
  )
}

export default Modal;