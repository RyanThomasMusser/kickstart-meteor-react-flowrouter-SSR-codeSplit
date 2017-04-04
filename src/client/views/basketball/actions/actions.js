export const TOGGLE_HIDE_COMPLETED = 'TOGGLE_HIDE_COMPLETED';
export const CREATE_TASK = 'CREATE_TASK';

export const toggleHideCompleted = () => ({
  type: TOGGLE_HIDE_COMPLETED,
});
export const createTask = ({ Meteor }, description) => {
  Meteor.call('task.create', description);

  return {
    type: CREATE_TASK,
    description,
  };
};
