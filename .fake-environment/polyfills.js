import sift from 'sift';

import { tasksData } from './fake-data/tasks.js';

export const Meteor = {
  userId() {
    return 'me';
  },
  user() {
    return usersData[0];
  },
  call() {},
  isClient: true,
  subscribe: () => ({
    ready: () => true,
  }),
};

export const FlowRouter = {
  go: () => {},
}

export const FakeCollection = (name, documents=[]) => {
  const fakeCollection = {
    find(filter={}, options={}) {
      return sift(filter, documents);
    },
    findOne(filter={}, options={}) {
      options.limit = 1;
      if (typeof filter === 'string') {
        filter = { _id: filter };
      }
      return fakeCollection.find(filter, options)[0];
    },
  };
  return fakeCollection;
};

export const DefaultCollections = {
  Tasks: new FakeCollection('users', tasksData),
};

export const Tracker = {
  autorun: (cb) => {
    cb();
    return {
      stop: () => {},
    };
  },
  nonreactive: (cb) => { cb(); },
};
