import { TOGGLE_HIDE_COMPLETED } from './actions.js';
import { initialState } from '../../lib/reducers.js';

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HIDE_COMPLETED:
      return {
        ...state,
        hideCompleted: !state.hideCompleted,
      };
    default:
      return state;
  }
};
