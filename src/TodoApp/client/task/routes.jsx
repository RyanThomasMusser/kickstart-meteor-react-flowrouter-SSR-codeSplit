/*
 * 7.0
 * Here we define the route for a single task
 */

import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import { mount } from 'react-mounter';

/*
 * 7.1
 * Layout is a wrapper around all the client UI that passes some environement information
 * We'll go there next
 */
import Layout from '../layout/components/Layout.jsx';

export default (store) => {
  /*
   * 7.2
   * This define a route that will match /t/something and assign something to an _id variable
   */
  FlowRouter.route('/t/:_id', {
    name: 'task',
    action: () => {
      /*
       * 7.3
       * This action function is called when the route match /t/something
       * It will render an UI corresponding to the task id parameter
       */
      const taskId = FlowRouter.getParam('_id');
      const mountComponent = (Task) => {
        mount(Layout, { content: () => <Task taskId={taskId} />, store });
      };

      /*
       * 7.4
       * There is a split according on wether this is run on the client or the server.
       * This is related to Server Side Rendering (SSR).
       * You should ignore it for the time being and consider that Meteor.isServer === false
       * I'll come back to that later
       */
      if (Meteor.isServer) {
        const Task = require('./containers/Task.jsx');
        mountComponent(Task);
      } else {
        /*
         * 7.5
         * We require the UI and logic related to the task view only when the route is hit
         * Webpack will do some nice code spliting to bundle together
         * all that we need to load at that point
         * This avoids loading code we don't need
         * If you open your dev tool inspector and look at the network requests,
         * you'll see that there is a request made when a route is hit for the first time
         */
        require.ensure([], (require) => {
          const Task = require('./containers/Task.jsx');
          mountComponent(Task);
        });
      }
    },
  });
};
/*
 * 7.6
 * Go to ../layout/components/Layout.jsx
 */
