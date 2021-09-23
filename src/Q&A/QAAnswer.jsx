import React from 'react';
import moment from 'moment';
import EachAnswer from './Q&AEachAnswer.jsx';
import { TrackClickContext } from './../trackClick.jsx';

class QAAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showA: 2
    })
    this.loadMoreAClick = this.loadMoreAClick.bind(this);
    this.collapseAClick = this.collapseAClick.bind(this);
    this.sort = this.sort.bind(this);
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

  sort(prop, arr) {
    arr.sort(function(a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      } else {
        return 0;
      }
    })
    return arr;
  }


  render() {
    // if we don't have answer show some other things
    const first = 'Seller';
    const answers = Object.values(this.props.question.answers);
    if(answers.length === 0) {
      return (
        <div>
          <div className='listTitle'>A:</div>
          <div className='answerList'>
            We don't have answer for this question, submit the first answer!
          </div>
        </div>
      )
    } else {
      this.sort('helpfulness', answers);
      for (var i = 0; i < answers.length; i++) {
        if (answers[i].answerer_name === 'Seller') {
          answers.unshift(answers[i]);
          answers.splice(i+1, 1);
        }
      }

      return (
        <TrackClickContext.Consumer>{(context) => {
          var context = context
          return (
          <div>
            <div className='listTitle'>A:</div>
            <div className='answerList'>
              {answers.slice(0,this.state.showA).map(answer =>
                <EachAnswer key = {answer.id} answer = {answer} getQuestions = {this.props.getQuestions}/>
                )}
            </div>
            <div className='qa_answerBtn'>
              {answers.length > 2 && <button className='button' type='submit' onClick={() => {
        this.loadMoreAClick; context.click('qa_moreABtn', 'QA')}}>See more answers</button>}

              <button className='button' type='submit' onClick={() => {this.collapseAClick(e); context.click('qa_collapseABtn', 'QA')}}>
                Collapse answers
              </button>
            </div>
          </div>
          )
        }}
        </TrackClickContext.Consumer>

      )
    }

  }
}

export default QAAnswer;