require('normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div>Looool</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
    yolo: 'loool'
};

export default AppComponent;
