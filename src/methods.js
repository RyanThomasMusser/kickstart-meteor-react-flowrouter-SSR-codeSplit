/*
 * 3.0
 * Here we define some methods for Meteor.
 * You can think of them as traditional api endpoints.
 * The advantage over those is that Meteor will magically apply optimistic UI updates
 * This means that, if possible, the same code will run immediately
 * on the client while an API request is made to the server.
 * So that your UI will update immediately before getting a response from the server
 * (a UI correction will only be applied if the server made a different
 * change to the data, which is unelikely)
 */

import { Meteor } from 'meteor/meteor';

/*
 * 3.1
 * Tasks is a Mongo collection that will holds all the tasks documents
 * Meteor's Mongo collections have a syntaxe that is very similar than Mongo queries
 * (you can roughly think of Mongo's collections as an equivalent of SQL tables)
 */
import Tasks from './collections/Tasks';


/*
 * 3.2
 * We now define a bunch of apis that are referenced by a name (no http method here)
 * They are pretty much self explanatory
 */
Meteor.methods({
  'task.create': (text) => {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'task.delete': (taskId) => {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Tasks.remove(taskId);
  },
  'task.toggleCheck': (taskId) => {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, { $set: { checked: !task.checked } });
  },
  'task.togglePrivacy': (taskId) => {
    const task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, { $set: { private: !task.private } });
  },
});

/*
 * 3.3
 * This is almost all for the server: so far we have:
 *    - a collection to store tasks
 *    - APIs endpoints
 *
 * go to /src//client/index.js
 */
