import React from 'react';
import moment from 'moment';
import EachAnswer from './Q&AEachAnswer.jsx'

class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  //onClick
  // setState: helpful & reported


  render() {
    return (
      <div>
          <h3>A:</h3>
          <div>
            {Object.values(this.props.question.answers).map(answer =>

              <EachAnswer key = {answer.id} answer = {answer}/>
              )}
          </div>
      </div>
    )
  }
}

export default QAAnswer;