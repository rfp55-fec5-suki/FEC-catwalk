import React from 'react';
import _ from 'underscore';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedStyle: this.props.styles.results[0]};
  }

  handleClick(style, e) {
    e.preventDefault();
    this.props.selectStyle(style);
  }

  render () {
    var styles = this.props.styles.results;
    return (
      <div>
        <p><b>STYLE &gt; </b>SELECTED STYLE</p>

        <div class='style-selector'>
          {_.map(styles, (style) => {
            return (
              <div class='style-container' key={style.style_id} onClick={this.handleClick.bind(this, style)}>
                <div class='style'><img src={style.photos[0].thumbnail_url}  /></div>
                <div class='style-name'>{style.name}</div>
              </div>
            )
          })}

        </div>



      </div>
    );

  }
}


export default StyleSelector;

// add overlay:
// https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp

//https://www.petco.com/shop/en/petcostore/product/guinea-pig-5004527--1