import React from 'react';
import QAAnswer from './QAAnswer.jsx'
import Modal from './QAModal.jsx'

class EachQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  // event handler
  showModal = () => {
    this.setState ({
      show: true
    })
  }

  hideModal = () => {
    this.setState ({
      show: false
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
            <Modal show={this.state.show} handleClose={this.hideModal}/>
            <button type = 'submit' onClick={this.showModal}>
              Submit an Answer
            </button>
          </div>
          <QAAnswer question = {question}/>
      </div>
    )
  }
}

export default EachQuestion;