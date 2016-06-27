/*
 * expose the context properties specified by their name
 * in the array @contextProperties
 */

import React, { Component } from 'react';
import { contextTypes } from '../../views/layout/config/contextTypes.js';

export const exposeContextToComponentProps = (ChildComponent, contextProperties) => {
  class Container extends Component {
    render() {
      const contextExposed = {};
      for (const key of contextProperties) {
        contextExposed[key] = this.context[key];
      }
      const props = { ...this.props, context: contextExposed };
      return (<ChildComponent {...props} />);
    }
  }
  const requestContextTypes = {};
  for (const key of contextProperties) {
    requestContextTypes[key] = contextTypes[key];
  }
  Container.contextTypes = requestContextTypes;
  return Container;
};
