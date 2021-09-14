import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import token from '../../config.js';
import mockData from './mockData.js';
import './RatingsReviews.css';
// var mockReviews = mockData.getReviews.results;
// var results = [];
var reviewPage = 1;
const RatingsReviews = (props) => {
  const [reviews, setReviews] = useState(() => {
    // console.log('use state function run')
    return []
  })

  const moreReviews = () => {
    // console.log(reviewPage)
    reviewPage++;
    getReviewList()
  }
  const getReviewList = (product_id = 40344) => {
    // console.log(product_id)
    // console.log(reviewPage)
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${product_id}&count=2&page=${reviewPage}`,
      headers: {
        'Authorization': token.TOKEN
      }
    }).then((response) => {
      // console.log(response.data.results)
      setReviews([...reviews, ...response.data.results])
    }).catch((err) => {
      console.log('error getting review list from api', err)
    })
  }
  useEffect(() => {
    getReviewList(props.product_id);
  }, [props.product_id])

  return (
    <div className="rr-main" >
      RATINGS AND REVIEWS
      <ReviewList reviews={reviews} more={() => {moreReviews()}}/>
    </div>
  )
}

export default RatingsReviews;