import React from 'react';

// import token from '../../config.js';
// import axios from 'axios';

class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   answers: []
    }
    // this.getAnswers = this.getAnswers.bind(this);

  // componentDidMount() {
  //   this.getAnswers()
  //}

  // getAnswers() {
  //   const question_id = this.props.questions.results.question_id
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`, {headers: {'Authorization': token.TOKEN}})
  //     .then((res) => {
  //       console.log('react get answers success: ', res.data);
  //       this.setState({
  //         answers: res.data.results
  //       });
  //     })
  //     .catch((error) => {
  //       throw error;
  //     })
  // }

  render() {
    console.log('this.props: ', this.props)
    return (
      <div>
          <h2>A:</h2>
          {this.props.questions.map(question =>
            Object.values(question.answers).map(answer =>
            <div key = {answer.id}>
              <div>{answer.body}</div>
              <div>by {answer.answerer_name}, {answer.date.substring(0,9)}</div>
            </div>)
          )}
      </div>
    )
  }
}

export default QAAnswer;