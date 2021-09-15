import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import QAAnswer from './QAAnswer.jsx'

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    //this.getAnswers()
  }

  getQuestions() {
    const product_id = this.props.product.id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${product_id}`, {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        // console.log('react get questions success: ', res.data);
        this.setState({
          questions: res.data.results
        });
      })
      .catch((error) => {
        throw error;
      });
  }


  render() {
    return(
      <div>
        <form>
          <input type="text" name="search" placeholder="Find your question" />
          <input type="submit" value="Search" />
        </form>
        {this.state.questions.map(question =>
        <div key = {question.question_id}>
          <h3>Q:</h3>
          {question.question_body}
          <div>
            <button type = 'submit'>Submit an Answer</button>
          </div>
          <QAAnswer question = {question}/>
        </div>)}

        <button type = 'submit'>More answered questions</button>
        <button type = 'submit'>Submit new question</button>
      </div>
    )
  }
}

export default QAList;