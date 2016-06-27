import { combineReducers } from 'redux';

export const initialState = {
  hideCompleted: false,
};

const defaultReducer = (state = initialState) => state;

export default function createReducer(asyncReducers = {}) {
  return combineReducers({
    defaultReducer,
    ...asyncReducers,
  });
}
