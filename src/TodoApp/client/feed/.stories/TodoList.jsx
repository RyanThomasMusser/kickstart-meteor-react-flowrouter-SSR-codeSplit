import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';

import FakeContext from '../../../../../.fake-environment/FakeContext.jsx';

import TodoList from '../containers/TodoList.jsx';


storiesOf('TodoList', module)
  .add('Various tasks', () => {
    const props = {
      tasks: [{
        _id: '123',
        owner: 'me',
        private: true,
        checked: false,
        text: 'do something!',
        username: 'guigui',
      }, {
        _id: '1235',
        owner: 'notMe',
        private: false,
        checked: true,
        text: 'do something else!',
        username: 'bob',
      }],
      userId: 'me',
    };
    return <FakeContext content={() => <TodoList {...props} />} />;
  });
