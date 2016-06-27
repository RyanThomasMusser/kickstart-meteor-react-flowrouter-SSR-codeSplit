/*
 * 15.0
 * have a look at https://github.com/kadirahq/react-storybook
 * Storybook is a great way to isolate and preview some ui components
 */

import { configure } from '@kadira/storybook';

global.Tracker = {
  nonreactive: function(cb) {
    cb();
    return { stop: function() {} };
  },
  autorun: function(cb) {
    cb();
  },
};

function loadStories() {
  require('../src/TodoApp/client/views/task/.stories/Task.jsx');
  require('../src/TodoApp/client/views/feed/.stories/TodoList.jsx');
}

configure(loadStories, module);
