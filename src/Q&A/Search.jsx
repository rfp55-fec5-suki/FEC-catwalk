import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchInput: '',
      searchText: ''
    })

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchInput(event) {
    event.preventDefault();
    var input = event.target.value;
    this.setState({
      searchInput: input
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    var submission = this.state.searchInput.toLowerCase();
    console.log('see submit: ', submission)
    this.setState({
      searchText: submission
    });
  }

  render() {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", margin: "15px"};
    return (
      <>
      <form>
        <input className="search-field" type="text" placeholder="Have a question? Search for answers…" style={BarStyling} onChange={(event) => { this.handleSearchInput(event) }}></input>
        <input className="search-button" type="submit" value="Search" onClick={(event) => { this.handleSearchSubmit(event) }}></input>
      </form>
      <div>
        {this.state.searchText}
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