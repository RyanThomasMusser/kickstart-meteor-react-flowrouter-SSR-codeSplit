import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FakeContext from '../../../../../../.storybook/FakeContext.jsx';
import { DefaultCollections } from '../../../../../../.storybook/polyfills.js';

import Task from '../../containers/Task.jsx';


storiesOf('Task', module)
  .add('My private undone task', () => {
    const props = {
      task: {
        owner: 'me',
        private: true,
        checked: false,
        text: 'do something!',
        username: 'guigui',
      },
      userId: 'me',
    };
    return <FakeContext content={() => <Task {...props} />} />;
  })
  .add('My private task done', () => {
    const props = {
      task: {
        owner: 'me',
        private: true,
        checked: true,
        text: 'do something else',
        username: 'guigui',
      },
      userId: 'me',
    };
    return <FakeContext content={() => <Task {...props} />} />;
  })
  .add('Someone else task', () => {
    const props = {
      task: {
        owner: 'notMe',
        private: false,
        checked: false,
        text: 'do something else',
        username: 'Someone else',
      },
      userId: 'me',
    };
    return <FakeContext content={() => <Task {...props} />} />;
  })
  .add('Someone else task (loaded from fake data!)', () => {
    const props = {
      task: DefaultCollections.Tasks.findOne(),
      userId: 'me',
    };
    return <FakeContext content={() => <Task {...props} />} />;
  });
