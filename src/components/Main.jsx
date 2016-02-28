import React from 'react';
import Todos from './todos/todos';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Todos />
      </div>
    );
  }
}

AppComponent.defaultProps = {
    yolo: 'loool'
};

export default AppComponent;
