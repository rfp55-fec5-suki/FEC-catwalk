import React, { useState } from 'react';
// import mockData from './mockData.js'
import ReviewTile from './reviewTile/ReviewTile.jsx';

const ReviewList = (props) => {
  // var reviewList = props.reviews.slice(0,2);
  const [count, setCount] = useState(0);
  // const [state, setState] = useState({renderList: props.reviews.slice(0,2)})
  // const renderList = state.renderList;
  return (
  <div>
    hooks yay
    {/* {renderList.map((review) => <ReviewTile review={review} />)} */}
    {/* <ReviewTile review={reviewList[0]}/>
    <ReviewTile review={reviewList[1]}/> */}
  </div>
  );
}

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }export default Example;


export default ReviewList;
