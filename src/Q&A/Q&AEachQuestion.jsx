import React from 'react';
import axios from 'axios';
import token from '../../config.js';
import QAAnswer from './QAAnswer.jsx';
import ModalA from './ModalA.jsx';

class EachQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      helpfulness: this.props.question.question_helpfulness
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addHelp = this.addHelp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  showModal() {
    this.setState ({
      show: true,
    })
  }

  hideModal() {
    this.setState ({
      show: false,
    })
  }


  addHelp(num) {
    const question_id = this.props.question.question_id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`,
      params: question_id,
      data: num,
      headers: {
        'Authorization': token.TOKEN
      }
    })
      .then((res) => {
        this.props.getQuestions();
        console.log('addHelp body: ', res);
      })
      .catch((error) => {
        throw error;
      })
  }

  handleClick() {
    const question_id = this.props.question.question_id;
    this.setState(prevState => {
      return {
        helpfulness: prevState.helpfulness + 1
      }
    })
    this.addHelp(question_id);
      // .then((res) => {
      //   console.log(res.body)
      // })
      // .catch((error) => {
      //   throw error;
      // })
  }

  //render
  render() {
    const question = this.props.question;
    return (
      <div key = {question.question_id}>
          <div className='listTitle'>Q:</div>
          {question.question_body}
          <br />
          post on: {question.question_date.slice(0,10)}
          <div>
            <ModalA
            show={this.state.show}
            handleClose={this.hideModal}
            postQuestion={this.props.postQuestion}
            getQuestions={this.props.getQuestions}
            product={this.props.product}
            question={this.props.question}
            answer={this.state.answer}
            type = 'answer'/>
            <button type = 'submit' onClick={this.showModal}>
              Add an Answer
            </button>
          </div>
          <div>
            Helpful?
            <button type = 'submit' onClick={this.handleClick}>Yes</button>
            <button >Report</button>
          </div>

          <QAAnswer question = {question}/>
      </div>
    )
  }
}

export default EachQuestion;