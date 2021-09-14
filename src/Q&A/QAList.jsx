import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import QAAnswer from './QAAnswer.jsx'

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      // answers: []
    }
    this.getQuestions = this.getQuestions.bind(this);
    //this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    //this.getAnswers()
  }

  getQuestions() {
    const product_id = this.props.product.id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${product_id}`, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        console.log('react get questions success: ', res.data);
        this.setState({
          questions: res.data.results
        });
      })
      .catch((error) => {
        throw error;
      });
  }





  render() {
    console.log('this.state.questions: ', this.state.questions);
    return(
      <div>
        <h2>Q:</h2>
        {this.state.questions.map(question =>
        <div key = {question.question_id}>
          {question.question_body}
        </div>)}
        <QAAnswer questions = {this.state.questions}/>
      </div>
    )
  }
}

export default QAList;