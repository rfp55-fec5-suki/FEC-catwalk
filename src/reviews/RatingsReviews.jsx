import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx'
import ReviewList from './ReviewList/ReviewList.jsx';
import AddReview from './AddReview/AddReview.jsx';
import Modal from './Modal.jsx';
import token from '../../config.js';
import './RatingsReviews.css';


var reviewPage = 1;
var sort = 'relevant';
class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      hasMoreReviews: true,
      meta: {},
      filterByRating: [],
      showAddReview: false
    }
    this.getReviewList = this.getReviewList.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sortChange = this.sortChange.bind(this);
    this.setRatingFilter = this.setRatingFilter.bind(this);
    this.setListToDefault = this.setListToDefault.bind(this);
    this.showAddReview = this.showAddReview.bind(this);
    this.hideAddReview = this.hideAddReview.bind(this);
    this.addReview = this.addReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }
  //////////////////////////////
  //Rating BreakDown handlers//
  /////////////////////////////
  setRatingFilter(rating) {
    if(this.state.filterByRating.includes(rating)) {
      var newfilter = this.state.filterByRating.filter((filterValue) => {
        return filterValue !== rating;
      })
      this.setState({filterByRating: newfilter}, () => {
        if(this.state.filterByRating.length === 0) {
          this.setListToDefault();
        } else {
        this.getAllReviews();
        }
      });
    } else {
      this.setState({filterByRating: [...this.state.filterByRating, rating]}, () => {
        this.getAllReviews();
      });
    }
  }
  ////////////////////////
  //Review list handlers//
  ////////////////////////
  sortChange(e) {
    e.preventDefault();
    sort = e.target.value;
    reviewPage = 1;
    if (this.state.filterByRating.length === 0) {
      this.setState({reviews: []}, () => {
        this.getReviewList();
      });
    } else {
      this.getAllReviews();
    }
  }
  setListToDefault () {
    this.state.hasMoreReviews = true;
    this.state.filterByRating = [];
    this.state.reviews = [];
    this.getReviewList();
  }
  ///////////////////////
  //Add Review Handlers//
  ///////////////////////
  showAddReview() {
    this.setState({showAddReview: true});
  }
  hideAddReview() {
    this.setState({showAddReview: false});
  }
  /////////////////////
  //api call handlers//
  /////////////////////
  getMeta() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.product_id}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      this.setState({meta: response.data});
    }).catch((err) => {
      console.log(err);
    })
  }
  getAllReviews() {
    if (this.state.meta.recommended) {
      var count = this.state.meta.recommended.true + this.state.meta.recommended.false;
    } else {
      var count = 100;
    }
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.props.product_id}&count=${count}&sort=${sort}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      this.state.hasMoreReviews = false;
      var filteredResults = response.data.results.filter((review) => {
        return this.state.filterByRating.includes(review.rating)
      })
      this.setState({reviews: filteredResults});
    }).catch((err) => {
      console.log('error getting all reviews to then filter by rating', err);
    })
  }
  getReviewList() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.props.product_id}&count=2&page=${reviewPage}&sort=${sort}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      this.setState({reviews: [...this.state.reviews, ...response.data.results]});
      axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.props.product_id}&count=2&page=${reviewPage + 1}`,
        headers: {
          'Authorization': token.TOKEN
        }
      }).then((response => {
        if (response.data.results.length === 0) {
          this.setState({ hasMoreReviews: false });
        }
      }))
    }).catch((err) => {
      console.log('error getting review list from api', err);
    })
  }
  moreReviews() {
    reviewPage++;
    this.getReviewList();
  }
  addReview(newReview) {
    newReview.product_id = this.props.product_id;
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
      headers: {
        'Authorization': token.TOKEN
      },
      data: newReview
    }).catch((err) => {
      console.log('error posting new review to server', err);
    })
  }
  markHelpful(review_id) {
    console.log('helpful')
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/helpful`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).catch((err) => {
      console.log('error marking review as helpful', err);
    })
  }
  reportReview(review_id) {
    console.log('report')
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/report`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).catch((err) => {
      console.log('error reporting review', err);
    })
  }
  ///////////////////////
  //lifecycle functions//
  ///////////////////////
  componentDidUpdate(oldProps) {
    if(oldProps.product_id !== this.props.product_id) {
      this.setListToDefault();
      this.getMeta();
    }
  }
  componentDidMount() {
    this.getReviewList();
    this.getMeta();
  }
  render() {
    return (

      <div className="rr-main" >
        <span className='rr-title'>RATINGS & REVIEWS</span>
        <RatingBreakdown meta={this.state.meta} filter={this.setRatingFilter} clear={this.setListToDefault}/>

        <ProductBreakdown chars={this.state.meta.characteristics}/>

        <ReviewList reviews={this.state.reviews} more={this.moreReviews} sort={this.sortChange}
        renderButton={this.state.hasMoreReviews} meta={this.state.meta} filter={this.state.filterByRating}
        setFilter={this.setRatingFilter} addReview={this.showAddReview} markHelpful={this.markHelpful}
        report={this.reportReview}/>

        <Modal show={this.state.showAddReview} handleClose={this.hideAddReview}
        children={<AddReview chars={this.state.meta.characteristics} close={this.hideAddReview}
        postReview={this.addReview}/>}/>
      </div>

    )
  }
}

export default RatingsReviews;