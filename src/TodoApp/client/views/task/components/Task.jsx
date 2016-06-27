/*
 * 13.0
 * This is the UI for the task view
 * It's a classic React component
 */

import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    userId: PropTypes.string,
    toggleTaskStatus: PropTypes.func.isRequired,
    deleteTaskAndRedirect: PropTypes.func.isRequired,
    toggleTaskPrivacy: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    // React doesn't auto bind functions...
    this.handleSetPrivate = this.handleSetPrivate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    // Set the checked property to the opposite of its current value
    const { task: { _id: taskId }, toggleTaskStatus } = this.props;
    toggleTaskStatus(taskId);
  }

  handleDelete() {
    const { task: { _id: taskId }, deleteTaskAndRedirect } = this.props;
    deleteTaskAndRedirect(taskId);
  }

  handleSetPrivate() {
    const { task: { _id: taskId }, toggleTaskPrivacy } = this.props;
    toggleTaskPrivacy(taskId);
  }

  renderTogglePrivate() {
    if (this.props.userId !== this.props.task.owner) {
      return null;
    }

    return (
      <button className="togglePrivate" onClick={this.handleSetPrivate}>
        {this.props.task.private ? 'Private' : 'Public'}
      </button>
    );
  }

  render() {
    let itemClass = '';

    if (this.props.task.checked) {
      itemClass += 'checked';
    }

    if (this.props.task.private) {
      itemClass += ' private';
    }

    const { task } = this.props;
    return (
      <div className={`${itemClass} item-main`}>
        <button className="delete" onClick={this.handleDelete}>&times;</button>
        <input
          type="checkbox"
          checked={task.checked}
          onChange={this.handleChecked}
          className="toggleChecked"
        />
        {this.renderTogglePrivate()}
        <span className="text">
          <strong>{task.username}</strong> - {this.props.task.text}
        </span>
      </div>
    );
  }
}

/*
 * 13.1
 * Go to ../../feed/index.js
 */
