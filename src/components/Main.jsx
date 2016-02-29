require('normalize.css');
require('styles/App.css');

import React from 'react';

const AppComponent = React.createClass({
  render() {
    return (
      <div className="index">
        <div>Looodf ssdfsdf asd asd ol</div>
      </div>
    );
  }
})

AppComponent.defaultProps = {
    yolo: 'loool'
};

export default AppComponent;
