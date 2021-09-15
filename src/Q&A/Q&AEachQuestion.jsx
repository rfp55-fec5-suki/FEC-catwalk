import React from 'react';
import QAAnswer from './QAAnswer.jsx'

class EachQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  // event handler

  //render
  render() {
    const question = this.props.question;
    return (
      <div key = {question.question_id}>
          <h3>Q:</h3>
          {question.question_body}
          <div>
            <button type = 'submit'>Submit an Answer</button>
          </div>
          <QAAnswer question = {question}/>
      </div>
    )
  }
}

export default EachQuestion;