import React from 'react';
import StarRating from './../../sharedComponents/StarRating.jsx';
// import checkmark from './Checkmark.svg';
import Modal from '../Modal.jsx';
import './reviewTile.css';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullImgUrl: '',
      showFullImg: false
    }
    this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var date = new Date(props.review.date);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    this.month = this.monthNames[month];
    this.day = day;
    this.year = year;
    if (props.review.summary.length > 65) {
      this.summary = props.review.summary.slice(0, 61);
      this.summaryCont = props.review.summary.slice(61);
    } else {
      this.summary = props.review.summary;
      this.summaryCont = false
    }
    this.showImgModal = this.showImgModal.bind(this);
    this.hideImgModal = this.hideImgModal.bind(this);
  }
  showImgModal(url) {
    this.setState({ fullImgUrl: url, showFullImg: true });
  }
  hideImgModal() {
    this.setState({ showFullImg: false });
  }
  render() {
    return (
      <div className='review-tile' data-testid='reviewTile'>
        <div className='star-rating' data-testid='reviewTileStarRating'>
          <StarRating rating={this.props.review.rating} />
        </div><br />
        <div className='review-date-username' data-testid='reviewTileUsernameDate'>
          {this.props.review.reviewer_name} | {this.month} {this.day}, {this.year}
        </div>
        <br />
        <div className='review-summary' data-testid='reviewTileSummary'>
          {this.summaryCont ? <span>{this.summary}...</span> : this.summary}
        </div>
        <div className='review-summary-cont' data-testid='reviewTileSummaryCont'>
          {this.summaryCont ? this.summaryCont : null}
        </div>
        <div className='review-body' data-testid='reviewTileBody'>
          <div>
            {this.props.review.body}
          </div>
          <div>
            {this.props.review.photos.length ? this.props.review.photos.map((photo) => (<img src={`${photo.url}`}
              className='tile-thumb' key={photo.id} onClick={() => this.showImgModal(photo.url)} alt='review thumbnail'/>)) : null}
          </div>
        </div>
        {this.props.review.recommend ? <div className='recommend' data-testid='reviewTileRecommend'>
          <i class="fas fa-check"></i> I recommend this product</div> : null}
        {this.props.review.response ? <div className='response' data-testid='reviewTileResponse'>
          Response: <br />
          {this.props.review.response}
        </div> : null}
        <div className='helpful' data-testid='reviewTileHelpful'>
          <span className='helpful-button' onClick={() => {
            this.props.markHelpful(this.props.review.review_id)
          }}>Helpful? Yes({this.props.review.helpfulness}) </span> | <span className='report-button'
            onClick={() => { this.props.report(this.props.review.review_id) }}>report</span>
        </div>

        <Modal show={this.state.showFullImg} children={<img src={this.state.fullImgUrl} alt='review image full size'/>} handleClose={this.hideImgModal} />
      </div>
    )
  }
}
export default ReviewTile;