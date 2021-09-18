import React from 'react';
import _ from 'underscore';

const MAX_PHOTOS_TO_DISPLAY = 7;


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentShowedFirstIndex: 0, currentSelectedIndex: 0};
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.setState({ currentShowedFirstIndex: 0, currentSelectedIndex: 0 });
    }
  }
  onUpClick() {
    this.setState({currentShowedFirstIndex: Math.max(0, this.state.currentShowedFirstIndex - 7)});
  }

  onDownClick() {
    const currentIndex = this.state.currentShowedFirstIndex;
    if (currentIndex + MAX_PHOTOS_TO_DISPLAY >= this.props.selectedStyle.photos.length) return;
    this.setState({currentShowedFirstIndex: currentIndex + MAX_PHOTOS_TO_DISPLAY});
  }

  onImageClick(index) {
    this.setState({currentSelectedIndex: index});
  }

  render() {
    const stylePhotos = this.props.selectedStyle.photos;
    const currentIndex = this.state.currentShowedFirstIndex;
    const renderUpButton = (<button disabled={currentIndex === 0} onClick={this.onUpClick.bind(this)}>UP</button>);
    const renderDownButton = (<button
                                disabled={currentIndex + MAX_PHOTOS_TO_DISPLAY >= stylePhotos.length}
                                onClick={this.onDownClick.bind(this)}>DOWN</button>);

    return (
      <div class='imageContainer'>
        <div class='selectionImgColumn'>
          {renderUpButton}
          <div class='selectionImages'>
            {stylePhotos.map((photo, index) => {
              if (index >= currentIndex && index < currentIndex + MAX_PHOTOS_TO_DISPLAY) {
                return (<img class='selectionImg'
                          src={photo.thumbnail_url}
                          onClick={this.onImageClick.bind(this, index)} />);
              }
              return (<div/>);
              })}
          </div>
          {renderDownButton}
        </div>
        <div class='mainImage-container'>
          <img class='mainImage' src={stylePhotos[this.state.currentSelectedIndex].url}></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;