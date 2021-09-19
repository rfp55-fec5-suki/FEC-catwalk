import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import QAAnswer from './QAAnswer.jsx';
import EachQuestion from './Q&AEachQuestion.jsx';
import ModalQ from './ModalQ.jsx';
import Search from './Search.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      showQ: 2,
      show: false
    }
    this.getQuestions = this.getQuestions.bind(this);
    this.loadMoreQClick = this.loadMoreQClick.bind(this);
    this.collapseQClick = this.collapseQClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${product_id}&page=${1}&count=${100}`, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        this.setState({
          questions: res.data.results
        });
      })
      .catch((error) => {
        throw error;
      });
  }


  loadMoreQClick(e) {
    e.preventDefault();
    this.setState(
      prevState => {
        return {
          showQ: prevState.showQ += 2
        }
      })
  }

  collapseQClick(e) {
    e.preventDefault();
    this.setState({
      showQ: 2
    })
  }

  showModal() {
    this.setState ({
      show: true,
    })
  }

  hideModal() {
    this.setState ({
      show: false,
    })
  }



  render() {
    if(this.state.questions.length === 0) {
      return(
        <div className = 'QA'>
          <div className='listTitle'>We don't have questions for this product, Post the first Question!</div>
          <div>
            <ModalQ
            show={this.state.show}
            handleClose={this.hideModal}
            getQuestions={this.getQuestions}
            product_id={this.props.product.id}
            type = 'question'/>
            <button type = 'submit' onClick={this.showModal}>
              Submit a question
            </button>
          </div>
        </div>
      )
    }else {
      return(
        <div className = 'QA'>
          <Search questions = {this.state.questions}/>
          <div className = 'questionList'>
            {this.state.questions.slice(0,this.state.showQ).map(question =>
            <EachQuestion key = {question.question_id} question = {question} postQuestion = {this.postQuestion} getQuestions = {this.getQuestions}product = {this.props.product}/>
            )}
          </div>
          <div className = 'questionBtn'>
            <button type='submit' onClick={this.collapseQClick}>Show less answered questions</button>
            {this.state.questions.length > 2 && <button type = 'submit' onClick={this.loadMoreQClick}>More answered questions</button>}
          </div>
          <div>
            <ModalQ
            show={this.state.show}
            handleClose={this.hideModal}
            getQuestions={this.getQuestions}
            product_id={this.props.product.id}
            type = 'question'/>
            <button type = 'submit' onClick={this.showModal}>
              Add more question
            </button>
          </div>
        </div>
      )
    }
  }
}

export default QAList;