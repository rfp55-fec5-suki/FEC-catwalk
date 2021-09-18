import OverviewInformation from './OverviewInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import './OverviewStyleSheet.css';

import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedStyle: this.props.styles.results[0]};
  }

  componentDidUpdate(prevProps) {
    if (this.props.styles.product_id !== prevProps.styles.product_id) {
      this.setState({ selectedStyle: this.props.styles.results[0] });
    }
  }

  handleSelect(style) {
    this.setState({ selectedStyle: style });
  }

  render () {
    return (
      <div class='overview'>
        <div class='overviewTop'>
          <div class='leftCol'>
            <ImageGallery selectedStyle={this.state.selectedStyle}/>
          </div>

          <div class='rightCol'>
            <OverviewInformation product={this.props.product} selectedStyle={this.state.selectedStyle} />
            <StyleSelector styles={this.props.styles} selectStyle={this.handleSelect.bind(this)} />
            <AddToCart selectedStyle={this.state.selectedStyle}/>
            <div class='infoFreeText'>
              <h3>{this.props.product.slogan}</h3>
              <p>{this.props.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Overview;