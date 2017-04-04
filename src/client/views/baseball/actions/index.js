import { injectAsyncReducer } from '../../../lib/store.js';
import BaseballReducer from './BaseballReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'tasks', BaseballReducer);
};
