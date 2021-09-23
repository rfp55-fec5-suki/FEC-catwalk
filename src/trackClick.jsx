import React from 'react';
import token from './../config.js';

export const TrackClickContext = React.createContext();

class TrackContextProvider extends React.Component {

  sendClickTrack(element, widget) {
    console.log('click tracked!')
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
      headers: {
        'Authorization': token.TOKEN
      },
      body: {
        'element': element,
        'widget': widget,
        'time': new Date()
      }
    })
  }
  render() {
    return(
      <TrackClickContext.Provider value={{click: this.sendClickTrack}}>
        {this.props.children}
      </TrackClickContext.Provider>
    );
  }
}
// export default TrackClickContext;
export default { TrackContextProvider };