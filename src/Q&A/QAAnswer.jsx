import React from 'react';
import moment from 'moment';


class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
    }


  render() {
    return (
      <div>
          <h3>A:</h3>
          <div>
            {Object.values(this.props.question.answers).map(answer =>
              <div key = {answer.id}>
                <div>{answer.body}</div>
                <div>by {answer.answerer_name}, {answer.date.substring(0,10)}</div>
                <div>
                  helpful?
                  <button type = 'submit'>Yes</button>
                  <button type = 'submit'>Report</button>
                </div>
              </div>)}
          </div>
      </div>
    )
  }
}

export default QAAnswer;