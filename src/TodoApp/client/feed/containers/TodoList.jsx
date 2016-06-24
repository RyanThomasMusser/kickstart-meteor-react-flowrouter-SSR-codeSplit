import ContainerFactory from '../../lib/ContainerFactory';

import TodoList from '../components/TodoList.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient) ?
  require('../css/TodoList.import.css') :
  require('!css!../css/TodoList.import.css');

export default new ContainerFactory(TodoList, {
  styles: [style],
});
