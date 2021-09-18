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
    //this.toggleModal = this.toggleModal.bind(this)
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

  //event handler here
  submitForm(e) {
    const { body, name, email, photos, answer } = this.state
    const { question, postQuestion, product_id } = this.props
    const question_id = this.props.question.question_id
    const input = (answer ? { question_id, body, name, email } : { body, name, email, product_id })
    // should work more on photos

    e.preventDefault()

    if( answer ) {
      this.postAnswer(question_id, input)
    } else {
      this.props.postQuestion(input)
    }

    this.setState({
      body: '',
      name: '',
      email: '',
      photos: []
    })
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
        <section className='modal-main'>
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
              <button onClick={handleClose}>
                Close
              </button>
              <button type = 'submit' onClick={handleClose}>
                Submit
              </button>
            </form>
          </div>

        </section>
      </div>
    )
  }
}



export default ModalA;