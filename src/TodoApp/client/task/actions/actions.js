export const TOGGLE_TASK_PRIVACY = 'TOGGLE_TASK_PRIVACY';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';

export const toggleTaskPrivacy = ({ Meteor }, taskId) => {
  Meteor.call('task.togglePrivacy', taskId);

  return {
    type: TOGGLE_TASK_PRIVACY,
    taskId,
  };
};
export const toggleTaskStatus = ({ Meteor }, taskId) => {
  Meteor.call('task.toggleCheck', taskId);

  return {
    type: TOGGLE_TASK_STATUS,
    taskId,
  };
};
export const deleteTask = ({ Meteor }, taskId) => {
  Meteor.call('task.delete', taskId);

  return {
    type: DELETE_TASK,
    taskId,
  };
};
