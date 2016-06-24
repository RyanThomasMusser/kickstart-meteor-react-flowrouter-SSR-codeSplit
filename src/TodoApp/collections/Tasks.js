import { Mongo } from 'meteor/mongo';

const Tasks = new Mongo.Collection('tasks');

// add default tasks
if (Tasks.find().count() < 3) {
  Tasks.insert({
    owner: 'someId',
    private: false,
    checked: false,
    text: 'Get ready to dig in the code',
    username: 'For me',
  });
  Tasks.insert({
    owner: 'someId',
    private: false,
    checked: false,
    text: 'Look at the source code, and find all the server side rendering magic',
    username: 'For me',
  });
  Tasks.insert({
    owner: 'someId2',
    private: false,
    checked: true,
    text: 'Launch Meteor',
    username: 'For me',
  });
}

export default Tasks;
