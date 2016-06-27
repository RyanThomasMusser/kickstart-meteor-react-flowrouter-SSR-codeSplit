import React, { Component, PropTypes } from 'react';
import NoSSR from 'react-no-ssr';
import { BlazeToReact } from 'meteor/thereactivestack:blazetoreact';

const LoginButtons = new BlazeToReact('loginButtons');

export default class TodoHeader extends Component {
  static displayName = 'TodoHeader';
  static propTypes = {
    hideCompleted: PropTypes.bool.isRequired,
    toggleHideCompleted: PropTypes.func.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    createTask: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const text = event.target.text.value;

    // Insert a task into the collection
    this.props.createTask(text);

    // Clear form
    event.target.text.value = '';
  }

  render() {
    const { userId, incompleteCount, hideCompleted, toggleHideCompleted } = this.props;

    return (
      <header>
        <h1>
          <img src={require('TodoApp/client/img/check.png')} alt="" />
          Todo List ({incompleteCount})
        </h1>

        <label className="hideCompleted">
          <input type="checkbox" checked={hideCompleted} onChange={toggleHideCompleted} />
          Hide Completed Tasks
        </label>

        <NoSSR><LoginButtons /></NoSSR>

        {userId && <form className="newTask" onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="Type to add new tasks" />
        </form>}
      </header>
    );
  }
}
