import React from 'react';
import ReviewTile from './reviewTile/ReviewTile.jsx';
class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="rr-main">
        <h1>Hello R and R</h1>
        <ReviewTile />
      </div>
    )
  }
}

export default RatingsReviews;