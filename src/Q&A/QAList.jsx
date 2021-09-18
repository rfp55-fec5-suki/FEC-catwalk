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
    this.loadMoreQClick = this.loadMoreQClick.bind(this);
    this.collapseQClick = this.collapseQClick.bind(this);
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

  loadMoreQClick(e) {
    e.preventDefault();
    this.setState(
      prevState => {
        return {
          showQ: prevState.showQ += 2
        }
      })
    // this.setState({
    //   showQ: this.state.questions.length
    // })
  }

  collapseQClick(e) {
    e.preventDefault();
    this.setState({
      showQ: 2
    })
  }



  render() {
    if(this.state.questions.length === 0) {
      return(
        <div>
          <button type = 'submit'>submit a question</button>
        </div>
      )
    }else {
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
            <button type='submit' onClick={this.collapseQClick}>Show less answered questions</button>
            {this.state.questions.length > 2 && <button type = 'submit' onClick={this.loadMoreQClick}>More answered questions</button>}
            <button type = 'submit'>Add more question</button>
          </div>
        </div>
      )
    }
  }
}

export default QAList;