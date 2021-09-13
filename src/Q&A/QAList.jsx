import React from 'react';
import token from '../../config.js';
import axios from 'axios'

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {headers: {'Authorization': token.TOKEN}})
      .then((res) => {
        console.log('react get questions success: ', res);
        this.setState({
          questions: res.data
        });
      })
      .catch((error) => {
        throw error;
        console.log('react get transactions error: ', error);
      });
  }


  render() {
    console.log('this.state.questions: ', this.state.questions);
    return(
      <div>
        See our list
        {this.state.questions.map(question => <div key = {question.id}>{question.description}</div>)}
      </div>
    )
  }
}

export default QAList;