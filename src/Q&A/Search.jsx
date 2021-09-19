import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchInput: '',
      disPlayQ: ''
    })

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handledisplayQ = this.handledisplayQ.bind(this);
    this.findMatchedQ = this.findMatchedQ.bind(this);
  }

  handleSearchInput(event) {
    event.preventDefault();
    var input = event.target.value;
    if(input.length < 3) {
      return;
    } else {
      this.setState({
        searchInput: input
      });
    }
  }


  handledisplayQ(input) {
    console.log('input in Search: ', input)
    if(input === '') {
      return;
    } else {
      var matchedQ = this.findMatchedQ(input);
      this.setState ({
        disPlayQ: matchedQ
      })
    }
  }

  findMatchedQ(input) {
    console.log('test findMatched')
    var matchedQ = [];
    var questions = this.props.questions;
    for (var i = 0; i < questions.length; i++) {
      var lowerInput = input.toLowerCase();
      var lowerquestion = questions[i].question_body.toLowerCase();
      if(lowerquestion.includes(lowerInput)) {
        matchedQ.push(questions[i].question_body)
      }
    }
    return matchedQ;
  }

  handleClick() {
    this.handledisplayQ(this.state.searchInput);
  }

  render() {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin: "15px"};
    return (
      <>
      <form>
        <input className="search-field" type="text" placeholder="Have a question? Search for answers…" style={BarStyling} onChange={(event) => { this.handleSearchInput(event) }}></input>
        <button onClick={() => this.handleClick()}>find questions</button>
      </form>
      <div>
        {this.state.disPlayQ}
      </div>
      </>
    )
  }

}
// const Search = ({keyword,setKeyword}) => {
//   const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin: "15px"};
//   return (
//     <>
//     <input
//      style={BarStyling}
//      key="random1"
//      value={keyword}
//      placeholder={"Have a question? Search for answers…"}
//      onChange={(e) => setKeyword(e.target.value)}
//     />
//     <input type = 'button' value='search'/>
//     </>
//   );
// }

export default Search;