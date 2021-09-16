import React from 'react';
import StarRating from './../../sharedComponents/StarRating.jsx';
import checkmark from './Checkmark.svg';
import './reviewTile.css';

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
      <div className='review-tile'>
        <div className='star-rating'>
        <StarRating rating={this.props.review.rating} />
        </div><br />
        <div className='review-date-username'>
        {this.props.review.reviewer_name} | {this.month} {this.day}, {this.year}
        </div>
        <br />
        <div className='review-summary'>
          <h2>{this.props.review.summary}</h2>
        </div>
        <div className='review-body'>
          {this.props.review.body}
        </div>
          {this.props.review.recommend ? <div className='recommend'>
            <img src={checkmark} className='check'/> I recommend this product</div> : null}
        {this.props.review.response ? <div className='response'>
          Response: <br />
          {this.props.review.response}
        </div> : null}
        <div className='helpful'>
        Helpful? Yes({this.props.review.helpfulness})
        </div>
      </div>
    )
  }
}
export default ReviewTile;