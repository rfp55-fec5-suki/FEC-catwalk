import React from 'react';
import _ from 'underscore';


const MAX_PHOTOS_TO_DISPLAY = 7;

const POPUP_STYLES = {
  position: 'fixed',
  width: '90%',
  height: '90%',
  padding: '3%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  objectFit: "cover",
  zIndex: 1000
}

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

  getMainImagePopup() {
    const openPopUp = this.state.isPopupOpen;
    const stylePhotos = this.props.selectedStyle.photos;
    const selected = this.state.currentSelectedIndex;
    const showedFirst = this.state.currentShowedFirstIndex;
    const photosLength = this.props.selectedStyle.photos.length
    if (!openPopUp) {
      return null;
    } else {
      return (
        <div style={POPUP_STYLES} class='main-img-popup'>
          <button class='btn-left' onClick={this.onClickToLeft.bind(this)} disabled={selected <= showedFirst}>&#8249;</button>
          <img src={stylePhotos[selected].url } class='mainPopup'></img>
          <button class='btn-right' onClick={this.onClickToRight.bind(this)} disabled={selected >= Math.min(showedFirst + MAX_PHOTOS_TO_DISPLAY - 1, stylePhotos.length - 1)}>&#8250;</button>
          <button onClick={this.onClickClosePopup.bind(this)} class='popup-close-button topright'>X</button>
        </div>
      )
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
                return (<img class='selectionImg' src={photo.thumbnail_url} onClick={this.onImageClick.bind(this, index)} style={index === currentSelected ? {border: 'solid'} : {border: 'none'} }/>);
              }
              return (<div/>);
              })}
          </div>
          {renderDownButton}
        </div>
        <div class='mainImage-container'>
          <button class='btn-left' onClick={this.onClickToLeft.bind(this)} disabled={currentSelected <= currentShowedFirst}>&#8249;</button>
          <img class='mainImage' src={stylePhotos[this.state.currentSelectedIndex].url} onClick={this.onMainImageClick.bind(this)} ></img>
          <button class='btn-right' onClick={this.onClickToRight.bind(this)} disabled={currentSelected >= Math.min(currentShowedFirst + MAX_PHOTOS_TO_DISPLAY - 1, stylePhotos.length - 1)}>&#8250;</button>
          {this.getMainImagePopup()}
        </div>
      </div>
    );
  }
}

export default ImageGallery;