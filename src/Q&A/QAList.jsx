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
        <EachQuestion question = {question}/>
        )}

        <button type = 'submit'>More answered questions</button>
        <button type = 'submit'>Submit new question</button>
      </div>
    )
  }
}

export default QAList;