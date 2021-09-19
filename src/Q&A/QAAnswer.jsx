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
    return (
      <div>
          <h3>A:</h3>
          <div className='answerList'>
            {Object.values(this.props.question.answers).slice(0,this.state.showA).map(answer =>

              <EachAnswer key = {answer.id} answer = {answer}/>
              )}
          </div>
          {Object.values(this.props.question.answers).length > 2 && <button type='submit' onClick={this.loadMoreAClick}>load more answer</button>}

          <button type='submit' onClick={this.collapseAClick}>
            show less answer
          </button>
      </div>
    )
  }
}

export default QAAnswer;