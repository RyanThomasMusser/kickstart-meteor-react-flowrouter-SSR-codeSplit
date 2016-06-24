/*
 * A container for the todos feed
 */
import ContainerFactory from '../../lib/ContainerFactory';

import TodoFeed from '../components/TodoFeed.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient) ?
  require('../css/TodoFeed.import.css') :
  require('!css!../css/TodoFeed.import.css');

export default new ContainerFactory(TodoFeed, {
  styles: [style],
  contextProperties: [
    'Meteor',
    'Collections',
  ],
  getData(props, onData) {
    const { hideCompleted, context } = props;
    const { Meteor, Collections: { Tasks } } = context;
    if (Meteor.subscribe('tasks').ready()) {
      const taskFilter = {};
      if (hideCompleted) {
        taskFilter.checked = { $ne: true };
      }

      const tasks = Tasks.find(taskFilter, { sort: { createdAt: -1 } }).fetch();
      const incompleteCount = Tasks.find({ checked: { $ne: true } }).count();

      onData(null, {
        tasks,
        incompleteCount,
        ...props,
      });
    }
  },
  mapStateToProps: (state) => ({
    hideCompleted: state.tasks.hideCompleted,
  }),
});
