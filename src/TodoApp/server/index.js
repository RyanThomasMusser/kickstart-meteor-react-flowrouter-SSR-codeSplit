/*
 * 2.0
 * This is the server entry point.
 * It loads the files the server needs.
 */


/*
 * 2.1
 * Webpack will resolve the files by looking at .js, .jsx, .css, /index.js etc
 * to try to match the import
 * I like to specify the extension to make it clearer if it's a stylesheet, a script etc
 */

import './publications.js'; // this could be import './publications'
// but I prefer to explicitely put the extension so I know what type of file it is

import '../methods';

/*
 * go to 'TodoApp/methods'
 */

/*
 * We only do Server Side Rendering in production to be able to use
 * Hot Module Reload in development and avoid super long server rebuild
 */
const useSSRAnyway = true;
if (process.env.NODE_ENV === 'production' || useSSRAnyway) {
  const { setUpRoutes } = require('../client/routes.jsx');
  setUpRoutes();
}
