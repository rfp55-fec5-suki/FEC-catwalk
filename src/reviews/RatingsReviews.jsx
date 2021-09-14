import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import token from '../../config.js';
import mockData from './mockData.js';
import './RatingsReviews.css';
// var mockReviews = mockData.getReviews.results;
// var results = [];
var reviewPage = 1;
// var totalReviews = 0;
// var sort = 'relevant'
class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.product_id = props.product_id;
    this.state = {
      reviews: [],
      hasMoreReviews: true,
      sort: 'relevant'
    }
    this.getReviewList = this.getReviewList.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
  }

  moreReviews() {
    // console.log(reviewPage)
    reviewPage++;
    this.getReviewList()
  }
  sort(e) {
    e.preventDefault();
    reviewPage = 1;
    setReviews([]);
    console.log(e.target.value);
    setSort(e.target.value);
    // sort = e.target.value;
    // getReviewList();
  }
  getReviewList() {
    // console.log(product_id)
    // console.log(reviewPage)
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.product_id}&count=2&page=${reviewPage}&sort=${this.state.sort}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      // console.log(response.data.results)
      this.setState({reviews: [...this.state.reviews, ...response.data.results]})
      axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${this.product_id}&count=2&page=${reviewPage + 1}`,
        headers: {
          'Authorization': token.TOKEN
        }
      }).then((response => {
        if (response.data.results.length === 0) {
          this.setState({ hasMoreReviews: false })
        }
      }))
    }).catch((err) => {
      console.log('error getting review list from api', err)
    })
  }
  componentDidMount() {
    this.getReviewList();
  }
  render() {
    return (
      <div className="rr-main" >
        RATINGS AND REVIEWS
        <ReviewList reviews={this.state.reviews} more={this.moreReviews} sort={this.sort} renderButton={this.state.hasMoreReviews} />
      </div>
    )
  }
}

export default RatingsReviews;