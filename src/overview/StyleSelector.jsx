import React from 'react';
import _ from 'underscore';
import { TrackClickContext } from '../trackClick.jsx'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedStyle: null};
  }


  handleClick(style, context, e) {
    e.preventDefault();
    context.click(`Style Selection ${style.style_id}`, 'StyleSelector');
    this.setState({ selectedStyle: style.style_id });
    this.props.selectStyle(style);
  }

  render () {
    var styles = this.props.styles.results;
    return (
      <TrackClickContext.Consumer>
        {(context) => {
          return (
            <div>
              <p><b>STYLE &gt; </b>SELECTED STYLE</p>
              <div class='style-selector'>
                {_.map(styles, (style) => {
                  return (
                    <div class='style-container' key={style.style_id} onClick={this.handleClick.bind(this, style, context)}>
                      <div id='style-checkmark'  hidden={style.style_id !== this.state.  selectedStyle}><i class="fafafa fas fa-check"></i></div>
                      <div class='style'><img src={style.photos[0].thumbnail_url}        /></div>
                      <div class='style-name'>{style.name}</div>
                    </div>)
                  })
                }
             </div>
           </div>)
          }
        }
      </TrackClickContext.Consumer>
    )


  }
}


export default StyleSelector;

// add overlay:
// https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp

//https://www.petco.com/shop/en/petcostore/product/guinea-pig-5004527--1