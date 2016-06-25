import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import FakeContext from '../../../../../.fake-environment/FakeContext.jsx';
import { DefaultCollections } from '../../../../../.fake-environment/polyfills.js';

import TaskContainer from '../containers/Task.jsx';
import Task from '../components/Task.jsx';

const defaultTask = DefaultCollections.Tasks.findOne();
const defaultTaskId = defaultTask._id;
const defaultProps = {
  task: defaultTask,
  toggleTaskStatus: () => {},
  deleteTaskAndRedirect: () => {},
  toggleTaskPrivacy: () => {},
};

describe('<Task />', () => {
  it('renders a task container with an element of class `.delete` in its children', () => {
    const wrapper = mount(<FakeContext content={() => <TaskContainer taskId={defaultTaskId} />} />);
    expect(wrapper.find('.delete')).to.have.length(1);
  });

  it('renders a task component with an element of class `.delete`', () => {
    const wrapper = shallow(<Task {...defaultProps} />);
    expect(wrapper.find('.delete')).to.have.length(1);
  });

  it('simulates check event', () => {
    const toggleTaskStatus = sinon.spy();
    const props = {
      ...defaultProps,
      toggleTaskStatus,
    };
    const wrapper = shallow(<Task {...props} />);

    wrapper.find('.toggleChecked').simulate('change', { target: { checked: true } });
    expect(toggleTaskStatus.calledOnce).to.equal(true);
  });
});
