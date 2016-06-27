/*
 * 4.0
 * This is the main client endpoint
 * it imports all the client logic and UI and does a few setups
 */
import { Meteor } from 'meteor/meteor';

/*
 * 4.1
 * Flowrouter is an excellent router that we'll use to handle navigation
 */
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

/*
 * 4.2
 * Accounts is a very good meteor package to handle user authentification
 * It's very easy to add facebook, twitter, ..., logins
 */
import { Accounts } from 'meteor/accounts-base';

/*
 * 4.3
 * We load the APIs endpoints that we've loaded on the server
 * This enable the client to know the logic of those APIs
 * calls and to anticipate the server's response
 * so that the UI updates are instantaneous
 */
import '../methods';

/*
 * 4.4
 * routes.jsx is the endpoint to define routes
 * setUpRoutes will define all the app's route
 */
import { setUpRoutes } from './routes.jsx';
setUpRoutes();

/*
 * 4.5
 * See how easy it is to setup user authentification with Meteor's accounts package
 */
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

/*
 * 4.6
 * Meteor.startup callback will be executed once all the app code has been loaded.
 * Placing things in this wrapper ensure that all the environement has been loaded
 * Here we start routing once everything is setup. You could also start things like analytics etc
 */
Meteor.startup(() => {
  FlowRouter.initialize();
});

/*
 * 4.7
 * Go to ./routes.jsx
 */
