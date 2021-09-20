import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import './Q&A.css';

class ModalA extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
      question: false,
      answer: true,
      // show: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.postAnswer = this.postAnswer.bind(this)
    this.submitErrForm = this.submitErrForm.bind(this)
    this.submitErrEmail = this.submitErrEmail.bind(this)
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  postAnswer(id, answer) {
    const question_id = this.props.question.question_id
    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`,
      params: question_id,
      data: answer,
      headers: {
        'Authorization': token.TOKEN
      }
    })
      .then((res) => {
        this.props.getQuestions();
      })
      .catch((error) => {
        throw error;
      })
  }

  submitForm(e) {
    const { body, name, email, photos, answer } = this.state
    const { question, postQuestion, product_id } = this.props
    const question_id = this.props.question.question_id
    const input = { question_id, body, name, email }
    // should work more on photos

    e.preventDefault()


    this.postAnswer(question_id, input)


    this.setState({
      body: '',
      name: '',
      email: '',
      photos: []
    })
  }

  submitErrForm(e) {
    alert(`You must enter the following: ${e.target.name}`);
    event.preventDefault();
  }

  submitErrEmail(e) {
    alert('The email address provided is not in correct email format');
  }



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
        <section className='modal-main1'>
          {children}
          <div className='modal-header'>
            <h3>{titleText}</h3>
            <p>
              <strong>{subtitleText}</strong>
            </p>
          </div>
          <div className='modal-body'>
            <form onSubmit={this.submitForm} name='QA'>
              <div>
                <label htmlFor='yourName'>
                  *Name:
                  <br />
                  <input
                    required
                    type='text'
                    name='name'
                    maxLength='60'
                    placeholder='Example: jack543!'
                    onChange={(e) => {this.handleFormChange(e)}}
                    onInvalid={this.submitErrForm}>
                  </input>
                </label>
                <div>
                  For privacy reasons, do not use your full name or email address
                </div>
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
                    onChange={(e) => {this.handleFormChange(e)}}
                    onInvalid={this.submitErrEmail}>
                  </input>
                </label>
                For authentication reasons, you will not be emailed” will appear
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
                    onChange={(e) => { this.handleFormChange(e) }}
                    onInvalid={this.submitErrForm}>
                  </input>
                </label>
                <br />
                  <label htmlFor='photos'>
                    Photos url:
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

              <button type = 'submit' onClick={handleClose}>
                Submit
              </button>
            </form>
            <button onClick={handleClose}>
                Close
            </button>
          </div>
        </section>
      </div>
    )
  }
}



export default ModalA;