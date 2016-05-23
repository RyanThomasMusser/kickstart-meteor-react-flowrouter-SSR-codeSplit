import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

FlowRouter.route('/', {
  action() {
    require(['./components/TodoApp'], function(TodoApp) {
      mount(TodoApp);
    })
  }
});
