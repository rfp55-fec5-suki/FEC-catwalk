import React from 'react';


class EachAnswer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const answer = this.props.answer;
    return (
      <div key = {answer.id}>
        <div>
          {answer.body}
        </div>
        <div>
          by {answer.answerer_name}, {answer.date.substring(0,10)}
        </div>
        <div>
          helpful?
          <button type = 'submit'>Yes</button>
          <button type = 'submit'>Report</button>
        </div>
      </div>
    )

  }
}

export default EachAnswer;