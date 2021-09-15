import OverviewInformation from './OverviewInformation.jsx';
import ImageGallary from './ImageGallary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DetailedInformation from './DetailedInformation.jsx';
import './OverviewStyleSheet.css';

import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div class='overview'>
        <div class='overviewTop'>
          <div class='leftCol'>
            <ImageGallary />
          </div>

          <div class='rightCol'>
            <OverviewInformation />
            <StyleSelector />
            <AddToCart />
          </div>
        </div>

        <DetailedInformation />
      </div>
    );

  }
}

export default Overview;