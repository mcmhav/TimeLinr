import React from 'react';
import Todo from '../todo/todo';

class Todos extends React.Component {
  render() {
    return (
      <div className="todos">
        <Todo />
      </div>
    );
  }
}

export default Todos;
