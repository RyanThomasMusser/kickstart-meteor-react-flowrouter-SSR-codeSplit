import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src//client/lib/store.js';

import { Meteor, FlowRouter, DefaultCollections } from './polyfills.js';
import { contextTypes } from '../src//client/views/layout/config/contextTypes.js';

const context = {
  Meteor,
  FlowRouter,
  Collections: DefaultCollections,
};
const store = configureStore();

export default class FakeContext extends Component {
  static childContextTypes = contextTypes;
  static propTypes = {
    content: PropTypes.func.isRequired,
  };

  getChildContext() {
    return context;
  }

  render() {
    return <Provider store={store} >{this.props.content()}</Provider>;
  }
};
