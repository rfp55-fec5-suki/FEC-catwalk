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
                <label htmlFor='yourName'>
                  *Name:
                  <br />
                  <input
                    required
                    type='text'
                    name='name'
                    maxLength='60'
                    placeholder='your nickName'
                    onChange={(e) => {this.handleFormChange(e)}}>
                  </input>
                </label>
              <br />
                <label htmlFor='email'>
                  *Email:
                  <br />
                  <input
                    required
                    type='email'
                    name='email'
                    placeholder='Example: yourname@gmail.com'
                    maxLength='60'
                    onChange={(e) => {this.handleFormChange(e)}}>
                  </input>
                </label>
              <br />
                <label htmlFor={text}>
                  *
                  {text}
                  <br />
                  <input
                    type='textarea'
                    required
                    name='body'
                    rows='20'
                    maxLength='1000'
                    onChange={(e) => { this.handleFormChange(e) }}>
                  </input>
                </label>
                <br />
                  <label htmlFor='photo'>
                    *Photo url:
                    <br />
                    <input
                      type='url'
                      onChange={(e) => {
                        this.handleFormChange(e)
                      }}
                      placeholder = 'your answer img url'>
                    </input>
                  </label>
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