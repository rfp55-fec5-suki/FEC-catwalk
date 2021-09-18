import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  //handle

  render () {
    return (
      <div className = 'searchBar'>
        <form>
          <input type="text" name="search" placeholder="Find your question" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search;