import { injectAsyncReducer } from '../../lib/store.js';
import taskReducer from './taskReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'task', taskReducer);
};
