import React from 'react';
import emptyStar from './Stars/scoreComponents/emptyStar.svg';
import quarterStar from './Stars/scoreComponents/25Star.svg';
import halfStar from './Stars/scoreComponents/50Star.svg';
import threeQStar from './Stars/scoreComponents/75Star.svg';
import fullStar from './Stars/scoreComponents/fullStar.svg';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var date = props.review.date;
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    this.month = this.monthNames[month];
    this.day = day;
    this.year = year;
  }
  render() {
    return (
      <div>
        <div>
          Star Rating<br/>
          <img src={fullStar} ></img>
          <img src={threeQStar} ></img>
          <img src={halfStar} ></img>
          <img src={quarterStar} ></img>
          <img src={emptyStar} ></img>
        </div>
        <div>
          Date of review<br/>
          {this.month} {this.day}, {this.year}
        </div>
        <div>
          Review Summary<br/>
        </div>
        <div>
          Review Body<br/>
        </div>
        <div>
          Recommend<br/>
        </div>
        <div>
          Reviewer name<br/>
        </div>
        <div>
          Response to review<br/>
        </div>
        <div>
          Rating helpfulness<br/>
        </div>
      </div>
    )
  }
}
export default ReviewTile;