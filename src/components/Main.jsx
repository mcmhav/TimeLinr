import React from 'react';
import Todos from './todos/todos';

const AppComponent = React.createClass({
  render() {
    return (
      <div className="index">
        <Todos />
      </div>
    );
  }
})

AppComponent.defaultProps = {
    yolo: 'loool'
};

export default AppComponent;
