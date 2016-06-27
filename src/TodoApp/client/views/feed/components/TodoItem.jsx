import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {
  static displayName = 'TodoItem';
  static propTypes = {
    task: PropTypes.object.isRequired,
    toggleTaskStatus: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskPrivacy: PropTypes.func.isRequired,
    userId: PropTypes.string,
    context: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSetPrivate = this.handleSetPrivate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(e) {
    e.preventDefault();
    e.stopPropagation();
    // Set the checked property to the opposite of its current value
    const { task: { _id: taskId }, toggleTaskStatus } = this.props;
    toggleTaskStatus(taskId);
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();

    const { task: { _id: taskId }, deleteTask } = this.props;
    deleteTask(taskId);
  }

  handleSetPrivate(e) {
    e.preventDefault();
    e.stopPropagation();

    const { task: { _id: taskId }, toggleTaskPrivacy } = this.props;
    toggleTaskPrivacy(taskId);
  }

  renderTogglePrivate() {
    const { userId, task } = this.props;
    if (userId !== task.owner) {
      return null;
    }

    return (
      <button className="togglePrivate" onClick={this.handleSetPrivate}>
        {task.private ? 'Private' : 'Public'}
      </button>
    );
  }

  render() {
    const { task, context } = this.props;
    let itemClass = '';

    if (task.checked) {
      itemClass += 'checked';
    }

    if (task.private) {
      itemClass += ' private';
    }

    return (
      <li className={`${itemClass} todo-item`}>
        <a onClick={() => { context.FlowRouter.go('task', { _id: task._id }); }}>
          <button className="delete" onClick={this.handleDelete}>&times;</button>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={this.handleChecked}
            onClick={(e) => { e.stopPropagation(); }}
            className="toggleChecked"
          />
          {this.renderTogglePrivate()}
          <span className="text"><strong>{task.username}</strong> - {task.text}</span>
        </a>
      </li>
    );
  }
}
