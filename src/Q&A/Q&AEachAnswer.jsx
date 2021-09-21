import React from 'react';
import axios from 'axios';
import token from '../../config.js';


class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpness: this.props.answer.helpfulness,
      reported: false
    }

    this.addHelp = this.addHelp.bind(this);
    this.handleClickYes = this.handleClickYes.bind(this);
    this.markReport = this.markReport.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
  }

  //after onclick helpful?, this.setState : helpness+1
  addHelp(num) {
    const answer_id = this.props.answer.id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/helpful`,
      params: answer_id,
      data: num,
      headers: {
        'Authorization': token.TOKEN
      }
    })
      .then((res) => {
        this.props.getQuestions();
      })
      .catch((error) => {
        throw error;
      })
  }

  markReport(input) {
    const answer_id = this.props.answer.id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/report`,
      parames: answer_id,
      data: input,
      headers: {
        'Authorization': token.TOKEN
      }
    })
      .then((res) => {
        this.props.getQuestions();
      })
      .catch((error) => {
        throw error;
      })
  }

  handleClickYes() {
    const answer_id = this.props.answer.id;
    this.setState(prevState => {
      return {
        helpfulness: prevState.helpfulness + 1
      }
    })
    this.addHelp(answer_id);
  }

  handleClickReport() {
    const answer_id = this.props.answer.id;
    this.setState({
      reported: true
    })
    this.markReport(answer_id, {});
  }

  render() {
    const answer = this.props.answer;
    const photos = this.props.answer.photos; //photos here are array, let's retrieve the url
    return (
      <div key = {answer.id}>
        <div>
          {answer.body}
        </div>
        <div>
          {photos.map(photo => <img key = {answer.id} src = {`${photo}`}/>)}
          by
          <div>
            {(answer.answerer_name === 'Seller') && <b>{answer.answerer_name}</b>}
            {(answer.answerer_name !== 'Seller') && <div>{answer.answerer_name}</div>}
          </div>
          <div>
            {answer.date.substring(0,10)}
          </div>
        </div>
        <div>
          helpful?
          <a className = 'link' onClick={this.handleClickYes}>
            <span>Yes({this.props.answer.helpfulness})</span>
          </a>

          <a className = 'link'>
            <span onClick={this.handleClickReport}>Report</span>
          </a>

        </div>
      </div>
    )
  }
}

export default EachAnswer;
