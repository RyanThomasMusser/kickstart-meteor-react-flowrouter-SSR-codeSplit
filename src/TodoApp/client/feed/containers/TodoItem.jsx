import ContainerFactory from '../../lib/ContainerFactory';

import {
  toggleTaskPrivacy,
  toggleTaskStatus,
  deleteTask,
} from '../../task/actions/actions.js';

import TodoItem from '../components/TodoItem.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient) ?
  require('../css/TodoItem.import.css') :
  require('!css!../css/TodoItem.import.css');

export default new ContainerFactory(TodoItem, {
  styles: [style],
  contextProperties: [
    'Meteor',
    'FlowRouter',
  ],
  getData(props, onData) {
    const { context: { Meteor } } = props;
    onData(null, {
      userId: Meteor.userId(),
    });
  },
  mapDispatchToProps: (dispatch, { context }) => ({
    toggleTaskPrivacy: (taskId) => { dispatch(toggleTaskPrivacy(context, taskId)); },
    toggleTaskStatus: (taskId) => { dispatch(toggleTaskStatus(context, taskId)); },
    deleteTask: (taskId) => { dispatch(deleteTask(context, taskId)); },
  }),
});
