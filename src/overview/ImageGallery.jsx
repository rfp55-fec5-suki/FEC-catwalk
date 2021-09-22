import React from 'react';
import _ from 'underscore';
import MainImagePopup from './MainImagePopup.jsx';

const MAX_PHOTOS_TO_DISPLAY = 7;


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentShowedFirstIndex: 0,
                   currentSelectedIndex: 0,
                   isPopupOpen: false
                  };
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

  onMainImageClick(e) {
    e.preventDefault();
    this.setState({ isPopupOpen: true });
  }

  onClickClosePopup(e) {
    e.preventDefault();
    this.setState({ isPopupOpen: false });
  }

  onClickToLeft() {
    const selected = this.state.currentSelectedIndex;
    const showedFirst = this.state.currentShowedFirstIndex;
    if (selected > showedFirst) {
      this.setState({ currentSelectedIndex: selected - 1});
    }
  }

  onClickToRight() {
    const selected = this.state.currentSelectedIndex;
    const showedFirst = this.state.currentShowedFirstIndex;
    const photosLength = this.props.selectedStyle.photos.length
    if (selected < Math.min(showedFirst + MAX_PHOTOS_TO_DISPLAY - 1, photosLength - 1)) {
      this.setState({ currentSelectedIndex: selected + 1 });
    }
  }

  render() {
    const stylePhotos = this.props.selectedStyle.photos;
    const currentShowedFirst = this.state.currentShowedFirstIndex;
    const currentSelected = this.state.currentSelectedIndex;
    const renderUpButton = (<button disabled={currentShowedFirst === 0} onClick={this.onUpClick.bind(this)}>UP</button>);
    const renderDownButton = (<button
                                disabled={currentShowedFirst + MAX_PHOTOS_TO_DISPLAY >= stylePhotos.length}
                                onClick={this.onDownClick.bind(this)}>DOWN</button>);

    return (
      <div class='imageContainer'>
        <div class='selectionImgColumn'>
          {renderUpButton}
          <div class='selectionImages'>
            {stylePhotos.map((photo, index) => {
              if (index >= currentShowedFirst && index < currentShowedFirst + MAX_PHOTOS_TO_DISPLAY) {
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
          <button id='mainLeft' onClick={this.onClickToLeft.bind(this)} disabled={currentSelected <= currentShowedFirst}>TO LEFT</button>
          <img class='mainImage' src={stylePhotos[this.state.currentSelectedIndex].url} onClick={this.onMainImageClick.bind(this)}></img>
          <button id='mainRight' onClick={this.onClickToRight.bind(this)} disabled={currentSelected >= Math.min(currentShowedFirst + MAX_PHOTOS_TO_DISPLAY - 1, stylePhotos.length - 1)}>TO RIGHT</button>
          <MainImagePopup openPopup={this.state.isPopupOpen} closePopup={this.onClickClosePopup.bind(this)}  stylePhotos={this.props.selectedStyle.photos} currentIndex={this.state.currentSelectedIndex}/>
        </div>
      </div>
    );
  }
}

export default ImageGallery;