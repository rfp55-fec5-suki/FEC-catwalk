import React from 'react';
import _ from 'underscore';

class ImageGallary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    var stylePhotos = this.props.selectedStyle.photos;
    return (
      <div class='imageContainer'>
        <div class='selectionImgColumn'>
          {_.map(stylePhotos, (photo) => {
            return ( <img class='selectionImg' src={photo.thumbnail_url}></img> )
          })}
        </div>
        <div class='mainImage-container'>
          <img class='mainImage' src={stylePhotos[0].url}></img>
        </div>
      </div>
    );
  }
}

export default ImageGallary;