import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import token from '../../config.js';
import mockData from './mockData.js';
import './RatingsReviews.css';
var mockReviews = mockData.getReviews.results;
var results = [];
const RatingsReviews = (props) => {
  const [reviews, setReviews] = useState(() => {
    console.log('use state function run')
    return mockReviews
  })

  const getReviewList = (product_id = 40344) => {
    console.log(product_id)
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${product_id}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      console.log(response.data.results)
      setReviews(response.data.results)
    }).catch((err) => {
      console.log('error getting review list from api', err)
    })
  }
  useEffect(() => {
    getReviewList();
  })

  return (
    <div className="rr-main" onClick={() => getReviewList()} >
      RATINGS AND REVIEWS
      <ReviewList reviews={reviews} />
    </div>
  )
}

export default RatingsReviews;