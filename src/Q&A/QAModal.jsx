import React from 'react';
import './Q&A.css';

class Modal extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photo: [],
      question: false,
      answer: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //event handler here
  submitForm(e) {
    const { body, name, email, photo, answer } = this.state
    const { postAnswer, postQuestion, product } = this.props
    const input = (answer ? { body, name, email, photo } : { body, name, email, product })

    e.preventDefault()

    if( answer ) {
      postAnswer(input)
    } else {
      postQuestion(input)
    }

    this.setState({
      body: '',
      name: '',
      email: '',
      photo: []
    })

    // this.toggleModal()
  }

  // toggleModal

  render() {
    const question = this.state.question
    const product = this.props.product
    const eachQuestion  = this.props.question
    const handleClose = this.props.handleClose;
    const show = this.props.show;
    const children = this.props.children;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const text = (question ? 'Question: ' : 'Answer: ')
    const titleText = (question ? 'Ask your Question: ' : 'Submit your Answer')
    const subtitleText = (question ? 'About the Product: ' : `${product.name}: ${eachQuestion.question_body}`)

    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <div className='modal-header'>
            <h3>{titleText}</h3>
            <p>
              <strong>{subtitleText}</strong>
            </p>
          </div>
          <div className='modal-body'>
            <form onSubmit={(e) => {this.submitForm(e)}} name='QA'>
              <div>
                {/* <label></label>
                <label></label>
                <label></label> */}
                See the form
              </div>
            </form>
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