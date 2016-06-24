/*
 * 14.0
 * All this repository handle elements of the feed.
 * There's nothing new in term of structure sbut make sure you have a look at everything
 *
 * We're now done with the app stuff!!
 * You can now have a look at ../../../../.storybook/config.js
 */

import registerFeedActions from './actions';
import registerRoutes from './routes.jsx';

import registerTaskActions from '../task/actions';

export default {
  load(store) {
    registerRoutes(store);
    registerTaskActions(store);
    registerFeedActions(store);
  },
};
