import { Meteor } from 'meteor/meteor';
import Tasks from '../collections/Tasks';

// This code only runs on the server
Meteor.publish('tasks', function loadTasks() {
  return Tasks.find({
    $or: [
      { private: { $ne: true } },
      { owner: this.userId },
    ],
  });
});

Meteor.publish('task', function loadTask({ _id }) {
  return Tasks.find({
    _id,
    $or: [
      { private: { $ne: true } },
      { owner: this.userId },
    ],
  });
});
