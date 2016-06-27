/*
 * 6.0
 * All this folder describes things related to the task view
 * We define Redux actions that can impact a single task
 * and the route related to a single task view
 *
 * I won't go into the details of redux (it's well covered in many placed) but
 * - if you want to build an ambitious app, use it
 * - if you want to learn a good tech / data flow design, use it
 * - if you just want to do a small project, you probably don't need it
 */

import registerActions from './actions';
import registerRoutes from './routes.jsx';

export default {
  load(store) {
    registerRoutes(store);
    registerActions(store);
  },
};

/*
 * 6.1
 * Go to ./routes.jsx
 */
