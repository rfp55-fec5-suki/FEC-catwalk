import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    // state

    // binds
  }

  // functions

  // component

  render() {
    return (
      <div className='riac-productcard-header'>

        RELATED PRODUCTS

        <div className='riac-productcard'>

          {/* <a href={props.repo.html_url}>link: {props.repo.html_url} </a> */}

          {/* <image> */}

          <div> Product Category </div>

          <div> Product Name </div>

          <div> Price </div>

          <div> Star Rating</div>

        </div>

      </div>
    );
  }
}

export default ProductCard;

// module.exports = ProductCard;
// for testing