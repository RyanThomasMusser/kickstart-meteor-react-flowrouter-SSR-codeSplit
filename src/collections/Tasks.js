import { Mongo } from 'meteor/mongo';

const Tasks = new Mongo.Collection('tasks');

// add default tasks
if (Meteor.isServer && Tasks.find().count() < 8) {
  const defaultTasks = [
    'Get ready to dig in the code',
    'Look at the source code, and find all the server side rendering magic',
    'Run tests from the shell (npm run testonly)',
    'Make sure lint is good (npm run lint)',
    'Make sure everything is good (npm run test)',
    'open storybook (from the shell: npm run storybook, and go to localhost:9001)',
  ];
  defaultTasks.forEach((defaultTaskDescription) => {
    Tasks.insert({
      owner: 'someId',
      private: false,
      checked: false,
      username: 'Default',
      text: defaultTaskDescription,
    });
  });
  Tasks.insert({
    owner: 'someId',
    private: false,
    checked: true,
    username: 'Default',
    text: 'Launch Meteor',
  });
}

export default Tasks;
