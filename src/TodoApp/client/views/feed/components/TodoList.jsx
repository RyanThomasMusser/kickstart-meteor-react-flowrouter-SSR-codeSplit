import React, { Component, PropTypes } from 'react';

import TodoItem from '../containers/TodoItem.jsx';

export default class TodoList extends Component {
  static displayName = 'TodoList';
  static propTypes = {
    tasks: PropTypes.array.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.tasks.map(task => <TodoItem key={task._id} task={task} />)}
      </ul>
    );
  }
}
