/*
 * A container for the header of the todos feed
 */

import ContainerFactory from '../../lib/ContainerFactory';

import {
  createTask,
  toggleHideCompleted,
} from '../actions/actions.js';

import TodoHeader from '../components/TodoHeader.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient) ?
  require('../css/TodoHeader.import.css') :
  require('!css!../css/TodoHeader.import.css');

export default new ContainerFactory(TodoHeader, {
  styles: [style],
  contextProperties: [
    'Meteor',
  ],
  getData(props, onData) {
    const { context: { Meteor } } = props;
    onData(null, {
      userId: Meteor.userId(),
    });
  },
  mapStateToProps: (state) => ({
    hideCompleted: state.tasks.hideCompleted,
  }),
  mapDispatchToProps(dispatch, { context }) {
    return {
      createTask: (description) => { dispatch(createTask(context, description)); },
      toggleHideCompleted: () => { dispatch(toggleHideCompleted()); },
    };
  },
});
