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
      showQ: 2
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
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

  handleClick(e) {
    console.log('test load more question click')
    e.preventDefault();
    this.setState({
      showQ: this.state.questions.length
    })
    console.log('test load more question: ', this.state)
  }




  render() {
    return(
      <div className = 'QA'>
        <div className = 'searchBar'>
          <form>
            <input type="text" name="search" placeholder="Find your question" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className = 'questionList'>
          {this.state.questions.slice(0,this.state.showQ).map(question =>
          <EachQuestion key = {question.question_id} question = {question} postQuestion = {this.postQuestion} getQuestions = {this.getQuestions}product = {this.props.product}/>
          )}
        </div>
        <div className = 'questionBtn'>
          <button type = 'submit' onClick={this.handleClick}>More answered questions</button>
          <button type = 'submit'>Submit new question</button>
        </div>
      </div>
    )
  }
}

export default QAList;