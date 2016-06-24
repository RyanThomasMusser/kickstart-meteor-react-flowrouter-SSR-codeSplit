/*
 * 8.0
 * This is a wrapper around all the app's component
 * All it does is to render a component passed by prop
 * and expose a context to its child component (ie all the app's components)
 *
 * Since meteor packaging system doens't work well with npm standards,
 * most of the external tools you'll want to use (mocha, storybook etc) won't work with
 * Meteor packages. So to make most of our components independent of Meteor, we pass
 * all meteor packages by context.
 *
 * This boilerplating honestly sucks, and it'd be great to have Meteor as a simple npm packages...
 * Anyway, go on!
 */

import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';

import '../css/Layout.import.css';

import { context } from '../config/context.js';
import { contextTypes } from '../config/contextTypes.js';

export default class Layout extends Component {
  static childContextTypes = contextTypes;
  static propTypes = {
    content: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
  };
  getChildContext() {
    // this makes whatever is in context accessible to all children
    return context;
  }
  render() {
    const { content, store } = this.props;

    return <Provider store={store}>
      <div className="container">
        {content()}
      </div>
    </Provider>;
  }
}

/*
 * 8.1
 * go to ../config/context.js
 */
