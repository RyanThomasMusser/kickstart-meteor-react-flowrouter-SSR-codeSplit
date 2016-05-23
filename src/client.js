import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import 'TodoApp/client';

Meteor.startup(function() {
  FlowRouter.initialize();
});
