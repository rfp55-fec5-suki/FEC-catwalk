import React from 'react';
import emptyStar from './Stars/scoreComponents/emptyStar.svg';
import quarterStar from './Stars/scoreComponents/25Star.svg';
import halfStar from './Stars/scoreComponents/50Star.svg';
import threeQStar from './Stars/scoreComponents/75Star.svg';
import fullStar from './Stars/scoreComponents/fullStar.svg';
import checkmark from './Stars/scoreComponents/Checkmark.svg';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var date = new Date(props.review.date);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    this.month = this.monthNames[month];
    this.day = day;
    this.year = year;
  }
  render() {
    return (
      <div>
        <div>
          <img src={fullStar} ></img>
          <img src={threeQStar} ></img>
          <img src={halfStar} ></img>
          <img src={quarterStar} ></img>
          <img src={emptyStar} ></img>
        </div><br />

        {this.props.review.reviewer_name} {this.month} {this.day}, {this.year}
        <br />
          <h2>{this.props.review.summary}</h2>
          {this.props.review.body}
          {this.props.review.recommend ? <div>
            <img src={checkmark} />I recommend this product</div> : null}
        {this.props.review.response ? <div>
          Response: <br />
          {this.props.review.response}
        </div> : null}
        Helpful? Yes({this.props.review.helpfulness})
      </div>
    )
  }
}
export default ReviewTile;