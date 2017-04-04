/*
 * 5.0
 * This sets up the main architecture for routes
 */

/*
 * 5.1
 * configureStore creates a Redux store that will contains the current app's state
 */
import configureStore from './lib/store.js';

/*
 * 5.2
 * For clarity, the app's logic is split in several modules
 */

import home from './views/home';
import football from './views/football';
import baseball from './views/baseball';
import basketball from './views/basketball';

/*
 * 5.3
 * Once called, we've defined all the routes
 */
export const setUpRoutes = (currentStore) => {
	const store = currentStore || configureStore();
	home.load(store);
	football.load(store);
	baseball.load(store);
	basketball.load(store);
};

/*
 * 5.4
 * Go to ./task/index.js
 */
