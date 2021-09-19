import React from 'react';
import QAAnswer from './QAAnswer.jsx'
import ModalA from './ModalA.jsx'

class EachQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      question_helpfulness: this.props.question.question_helpfulness
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.helpHandler = this.helpHandler.bind(this);
  }

  // event handler
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

  // helpHandler() {
  //   this.setState(
  //     prevState => {
  //       return {
  //         question_helpfulness: prevState.question_helpfulness+1
  //       }
  //     }
  //   )
  // }

  addHelp(question) {
    const question_id = this.props.question.question_id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`,
      params: question_id,
      data: question,
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
            <button type = 'submit' onClick={this.helpHandler}>Yes</button>
          </div>

          <QAAnswer question = {question}/>
      </div>
    )
  }
}

export default EachQuestion;