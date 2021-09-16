import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import QAAnswer from './QAAnswer.jsx'
import EachQuestion from './Q&AEachQuestion.jsx'

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    //this.getAnswers()
  }

  componentDidUpdate(prevProps) {
    if(this.props.product.id !== prevProps.product.id) {
      this.getQuestions();
    }
  }

  getQuestions() {
    const product_id = this.props.product.id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${product_id}`, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        this.setState({
          questions: res.data.results
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  postQuestion(question) {
    const product_id = this.props.product.id
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${product_id}`, question, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        this.getQuestions();
      })
      .catch((error) => {
        throw error;
      })
  }



  postAnswer(answer) {
    const question_id = this.state.questions.question_id
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`, answer, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        this.getQuestions();
      })
      .catch((error) => {
        throw error;
      })
  }



  render() {
    return(
      <div>
        <form>
          <input type="text" name="search" placeholder="Find your question" />
          <input type="submit" value="Search" />
        </form>
        {this.state.questions.map(question =>
        <EachQuestion key = {question.question_id} question = {question} postAnswer = {this.postAnswer} postQuestion = {this.postQuestion} product = {this.props.product}/>
        )}

        <button type = 'submit'>More answered questions</button>
        <button type = 'submit'>Submit new question</button>
      </div>
    )
  }
}

export default QAList;