import React from 'react';


class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpness: this.props.answer.helpfulness
    }
  }

  //after onclick helpful?, this.setState : helpness+1

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
          by {answer.answerer_name}, {answer.date.substring(0,10)}
        </div>
        <div>
          helpful?
          <button type = 'submit'>Yes</button>
          <button type = 'submit'>Report</button>
        </div>
      </div>
    )

  }
}

export default EachAnswer;