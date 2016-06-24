import { injectAsyncReducer } from '../../lib/store.js';
import tasksReducer from './tasksReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'tasks', tasksReducer);
};
