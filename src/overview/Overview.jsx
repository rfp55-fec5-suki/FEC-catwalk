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
    this.state = {selectedStyle: this.props.styles.results[0]};
  }

  render () {
    console.log(this.state.selectedStyle);
    return (
      <div class='overview'>
        <div class='overviewTop'>
          <div class='leftCol'>
            <ImageGallary selectedStyle={this.state.selectedStyle}/>
          </div>

          <div class='rightCol'>
            <OverviewInformation product={this.props.product} selectedStyle={this.state.selectedStyle} />
            <StyleSelector style={this.props.style} selectedStyle={this.state.selectedStyle} />
            <AddToCart />
          </div>
        </div>

        <DetailedInformation product={this.props.product}/>
      </div>
    );

  }
}

export default Overview;