import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import token from '../../config.js';
import mockData from './mockData.js';
import './RatingsReviews.css';
// var mockReviews = mockData.getReviews.results;
// var results = [];
var reviewPage = 1;
var totalReviews = 0;
const RatingsReviews = (props) => {
  const product_id = props.product_id;
  //states----------------------------------
  const [reviews, setReviews] = useState([])
  const [hasMoreReviews, setHasMoreReviews] = useState(true)

  const moreReviews = () => {
    // console.log(reviewPage)
    reviewPage++;
    getReviewList()
  }
  const getReviewList = () => {
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
      axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${product_id}&count=2&page=${reviewPage + 1}`,
        headers: {
        'Authorization': token.TOKEN
        }
      }).then((response => {
        if (response.data.results.length === 0) {
          setHasMoreReviews(false)
        }
      }))
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
      <ReviewList reviews={reviews} more={() => { moreReviews() }} renderButton={hasMoreReviews}/>
    </div>
  )
}

export default RatingsReviews;