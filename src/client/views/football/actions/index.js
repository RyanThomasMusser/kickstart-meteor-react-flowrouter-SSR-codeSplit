import { injectAsyncReducer } from '../../../lib/store.js';
import FootballReducer from './FootballReducer.js';

export default (store) => {
  injectAsyncReducer(store, 'tasks', FootballReducer);
};
