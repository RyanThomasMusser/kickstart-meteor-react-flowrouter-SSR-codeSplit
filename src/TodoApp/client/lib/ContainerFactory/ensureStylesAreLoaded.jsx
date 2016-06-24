import React, { Component } from 'react';

/*
 * For SSR, add the style in the head of the page being computed
 */
const csso = (typeof Meteor === 'undefined' || Meteor.isClient) ? null :
  require('csso');


/*
 * For server side rendering, we need to manually add some style to the head of components
 */

 // from http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
 // create a hash code from a string
const hashCode = (str) => {
  let hash = 0,
    i,
    chr,
    len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const ensureStylesAreLoaded = (ChildComponent, styles) => {
  // on the client, css loading works fine so we do nothing
  if (typeof Meteor === 'undefined' || Meteor.isClient) { return ChildComponent; }

  const componentName = ChildComponent.displayName || ChildComponent.name;
  console.log('Css compiled for', componentName);

  const stylesWrapper = [];
  for (const style of styles) {
    const styleTxt = style.toString();

    // if there is some weird style thing, don't do anything
    if (!styleTxt) { return; }

    const minifiedCss = csso.minify(styleTxt).css;

    stylesWrapper.push({
      style: minifiedCss,
      signature: hashCode(minifiedCss),
    });
  }

  class Container extends Component {
    componentWillMount() {
      let FlowRouter = this.context.FlowRouter;
      if (!FlowRouter) {
        if (ChildComponent._context) {
          FlowRouter = ChildComponent._context.FlowRouter;
        }
      }
      // make sure we don't add the style of a component several times
      const ssrContext = FlowRouter.ssrContext.get();
      if (ssrContext) {
        // keep track of the stylesheets already added to avoid duplicates
        ssrContext.styleAdded = ssrContext.styleAdded || [];

        for (const styleWrapper of stylesWrapper) {
          if (ssrContext.styleAdded.indexOf(styleWrapper.signature) > 0) { return; }
          ssrContext.styleAdded.push(styleWrapper.signature);

          // if the stylesheet has not already beed added in the head, we do so
          ssrContext.addToHead(
            `<style data-from="${componentName}">${styleWrapper.style}</style>`
          );
        }
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  // make sure FlowRouter is available in the context
  Container.contextTypes = ChildComponent.contextTypes || {};
  Container.contextTypes.FlowRouter = contextTypes.FlowRouter;

  return Container;
};
