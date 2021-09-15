import React from 'react';
import moment from 'moment';


class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
    }


  render() {
    console.log('this.props: ', this.props)
    return (
      <div>
          <h2>A:</h2>
          <div>
            {this.props.questions.map(question =>
              Object.values(question.answers).map(answer =>
              <div key = {answer.id}>
                <div>{answer.body}</div>
                <div>by {answer.answerer_name}, {answer.date.substring(0,10)}</div>
              </div>)
            )}
          </div>
          <div>
            helpful?
            <a>Yes</a>
            <a>Report</a>
          </div>
      </div>
    )
  }
}

export default QAAnswer;