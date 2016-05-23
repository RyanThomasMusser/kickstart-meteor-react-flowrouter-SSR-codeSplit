import { Accounts } from 'meteor/accounts-base';

import 'TodoApp/methods';
import './routes';

Meteor.isClient && Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
