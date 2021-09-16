import React from 'react';
import './Q&A.css';

class Modal extends React.Component {
  constructor(props) {
    super (props);
  }

  //event handler here

  render() {
    const handleClose = this.props.handleClose;
    const show = this.props.show;
    const children = this.props.children;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <div className='modal-header'>
            <h4 className='modal-title'>Add your answer</h4>
          </div>
          <div className='modal-body'>
            Answer form here
          </div>
          <button type='submit' onClick={handleClose}>
            Submit
          </button>
        </section>
      </div>
    )
  }
}



export default Modal;