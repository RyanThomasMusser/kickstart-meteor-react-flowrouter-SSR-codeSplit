import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import { mount } from 'react-mounter';

import Layout from '../layout/components/Layout.jsx';

export default (store) => {
  FlowRouter.route('/', {
    name: 'default',
    action: () => {
      const mountComponent = (TodoFeedContainer) => {
        mount(Layout, { content: () => <TodoFeedContainer />, store });
      };
      if (Meteor.isServer) {
        const TodoFeedContainer = require('./containers/TodoFeed.jsx');
        mountComponent(TodoFeedContainer);
      } else {
        require.ensure([], (require) => {
          const TodoFeedContainer = require('./containers/TodoFeed.jsx');
          mountComponent(TodoFeedContainer);
        });
      }
    },
  });
};
