import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import { mount } from 'react-mounter';

import Layout from '../layout/components/Layout.jsx';

export default (store) => {
  FlowRouter.route('/', {
    name: 'default',
    action: () => {
      const mountComponent = (TodoFeed) => {
        mount(Layout, { content: () => <TodoFeed />, store });
      };
      if (Meteor.isServer) {
        const TodoFeed = require('./containers/TodoFeed.jsx');
        mountComponent(TodoFeed);
      } else {
        require.ensure([], (require) => {
          const TodoFeed = require('./containers/TodoFeed.jsx');
          mountComponent(TodoFeed);
        });
      }
    },
  });
};
