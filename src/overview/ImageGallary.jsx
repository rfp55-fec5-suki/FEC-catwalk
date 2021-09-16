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
            return ( <img src={photo.thumbnail_url}></img> )
          })}
          <i class="arrowDown"></i>
        </div>
        <div class='mainImg'>
          <img src={stylePhotos[0].url}></img>
        </div>
      </div>
    );
  }
}

export default ImageGallary;