import React, { Component, PropTypes } from 'react';

import TodoHeader from '../containers/TodoHeader.jsx';
import TodoList from '../containers/TodoList.jsx';

export default class TodoMain extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
  };
  render() {
    const {
      tasks,
      incompleteCount,
    } = this.props;

    return (
      <div>
        <TodoHeader incompleteCount={incompleteCount} />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}
