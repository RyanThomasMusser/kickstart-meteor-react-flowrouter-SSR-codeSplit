/*
 * 9.0
 * Context is like props that can be passed to a component's descendant without
 * having each child pass it to the next
 *
 * We use that to abstract all the Meteor related dependencies that
 * don't respect npm loading standards
 * Another advantage, is that you can easily control this part for testing
 *
 * You can add here any Meteor related package you'd use
 * If you do, you'll also have to add en entry in ./contextTypes.js
 */
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Meteor } from 'meteor/meteor';

import Collections from '../../../collections/collections.js';


const pathFor = (path, params) => {
  let query = {};
  if (params && params.query) {
    query = FlowRouter._qs ? FlowRouter._qs.parse(params.query) : params.query;
  }
  return FlowRouter.path(path, params, query);
};

const urlFor = (path, params) =>
  Meteor.absoluteUrl(pathFor(path, params)).replace(/([^:]\/)\/+/g, '$1');

const currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowRouter.pathFor = pathFor;
FlowRouter.urlFor = urlFor;
FlowRouter.currentRoute = currentRoute;

export const context = {
  FlowRouter,
  Meteor,
  Collections,
};
/*
 * 9.1
 * Go to ../../task/containers/Task.jsx
 */
