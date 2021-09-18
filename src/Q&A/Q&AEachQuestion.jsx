import React from 'react';
import QAAnswer from './QAAnswer.jsx'
import ModalA from './ModalA.jsx'

class EachQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  //render
  render() {
    const question = this.props.question;
    return (
      <div key = {question.question_id}>
          <h3>Q:</h3>
          {question.question_body}
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
          <QAAnswer question = {question}/>
      </div>
    )
  }
}

export default EachQuestion;