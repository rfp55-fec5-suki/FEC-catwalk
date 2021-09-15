import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import token from '../../config.js';
import mockData from './mockData.js';
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
      filterByRating: []
    }
    this.getReviewList = this.getReviewList.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sortChange = this.sortChange.bind(this);
    this.setRatingFilter = this.setRatingFilter.bind(this);
  }
  //Rating BreakDown handlers ---------------------
  setRatingFilter(rating) {
    if(this.state.filterByRating.includes(rating)) {
      var newfilter = this.state.filterByRating.filter((filterValue) => {
        return filterValue !== rating;
      })
      this.setState({filterByRating: newfilter}, () => {
        if(this.state.filterByRating.length === 0) {
          this.state.reviews = [];
          this.getReviewList();
        }
      });
    } else {
      this.setState({filterByRating: [...this.state.filterByRating, rating]}, () => {
        this.getAllReviews();
      });
    }
  }
  //Review list handlers --------------------------
  sortChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    sort = e.target.value;
    reviewPage = 1;
    this.setState({reviews: []}, () => {
      this.getReviewList();
    });
  }
  //api call handlers -----------------------------
  getMeta() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.product_id}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      // console.log(response.data)
      this.setState({meta: response.data});
    }).catch((err) => {
      console.log(err);
    })
  }
  getAllReviews() {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.props.product_id}&count=100`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      console.log('got all reviews')
      this.setState({reviews: response.data.results});
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
  //lifecycle functions ---------------------------------------------
  componentDidUpdate(oldProps) {
    if(oldProps.product_id !== this.props.product_id) {
      this.state.reviews = [];
      this.state.filterByRating = [];
      this.getReviewList();
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
        RATINGS & REVIEWS
        <RatingBreakdown meta={this.state.meta} filter={this.setRatingFilter}/>
        <ReviewList reviews={this.state.reviews} more={this.moreReviews} sort={this.sortChange}
        renderButton={this.state.hasMoreReviews} meta={this.state.meta} filter={this.state.filterByRating}/>
      </div>
    )
  }
}

export default RatingsReviews;