import React from 'react';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          Star Rating
        </div>
        <div>
          Date of review
        </div>
        <div>
          Review Summary
        </div>
        <div>
          Review Body
        </div>
        <div>
          Recommend
        </div>
        <div>
          Reviewer name
        </div>
        <div>
          Response to review
        </div>
        <div>
          Rating helpfulness
        </div>
      </div>
    )
  }
}
export default ReviewTile;