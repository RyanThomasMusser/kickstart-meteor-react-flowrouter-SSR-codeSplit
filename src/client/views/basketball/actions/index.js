import { injectAsyncReducer } from '../../../lib/store.js';
import BasketballReducer from './BasketballReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'tasks', BasketballReducer);
};
