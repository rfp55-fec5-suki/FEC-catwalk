import React from 'react';
import emptyStar from './Stars/scoreComponents/emptyStar.svg';
import quarterStar from './Stars/scoreComponents/25Star.svg';
import halfStar from './Stars/scoreComponents/50Star.svg';
import threeQStar from './Stars/scoreComponents/75Star.svg';
import fullStar from './Stars/scoreComponents/fullStar.svg';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          Star Rating
          <img src={fullStar} ></img>
          <img src={threeQStar} ></img>
          <img src={halfStar} ></img>
          <img src={quarterStar} ></img>
          <img src={emptyStar} ></img>
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