import React from 'react';
import moment from 'moment';
import EachAnswer from './Q&AEachAnswer.jsx'

class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showA: 2
    })
    this.loadMoreAClick = this.loadMoreAClick.bind(this);
    this.collapseAClick = this.collapseAClick.bind(this);
  }


  loadMoreAClick(e) {
    e.preventDefault();
    this.setState({
      showA: this.props.question.answers.length
    })
  }

  collapseAClick(e) {
    e.preventDefault();
    this.setState({
      showA: 2
    })
  }
  // setState: helpful & reported


  render() {
    // move seller to first
    const first = 'Seller';
    const answers = Object.values(this.props.question.answers);
    console.log('see our answers: ', answers);
    for (var i = 0; i < answers.length; i++) {
      console.log('test for loop: ', answers[i].answerer_name);
      if (answers[i].answerer_name === 'Seller') {
        console.log('test if: ', answers[i]);
        answers.unshift(answers[i]);
        console.log('test unshift: ', answers[i]);
        answers.splice(i+1, 1);
      }
    }

    console.log('see sorted answers: ', answers);
    return (
      <div>
          <div className='listTitle'>A:</div>
          <div className='answerList'>
            {answers.slice(0,this.state.showA).map(answer =>
              <EachAnswer key = {answer.id} answer = {answer} getQuestions = {this.props.getQuestions}/>
              )}
          </div>
          {answers.length > 2 && <button type='submit' onClick={this.loadMoreAClick}>See more answers</button>}

          <button type='submit' onClick={this.collapseAClick}>
            Collapse answers
          </button>
      </div>
    )
  }
}

export default QAAnswer;