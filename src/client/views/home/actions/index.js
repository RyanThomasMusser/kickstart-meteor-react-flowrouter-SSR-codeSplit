import { injectAsyncReducer } from '../../../lib/store.js';
import HomeReducer from './HomeReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'tasks', HomeReducer);
};
