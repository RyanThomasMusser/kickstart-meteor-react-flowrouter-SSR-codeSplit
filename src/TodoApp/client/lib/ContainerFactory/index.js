/*
 * 11.0
 * ContainerFactory is a utility function that abstracts the interactions with:
 *    - loading data reactively
 *    - interacting with Redux and the app state
 *    - loading style in initial page load when doing SSR
 *
 * The main thing you've to know is how to use it. The api is:
 * ContainerFactory(UIComponentClass, params) where params can specify:
 *    - getData(props, onData): (more here: https://github.com/kadirahq/react-komposer)
 *      - props are the component props
 *      - onData is a function to call when data is ready, or when there's an error
 *
 *    - styles: an array of style sheets to include in the initial page load when doing SSR
 *      this changes nothing on the client
 *    - contextProperties: an array of strings to specify which element of the context you'll need
 *                         (most of the time, this only concerns Meteor related packages)
 *
 *    - mapStateToProps: Redux interaction, see react-redux
 *    - mapDispatchToProps: same
 */


import { composeWithTracker } from 'react-komposer';
import { connect } from 'react-redux';

/*
 * You can either dig in the following code, or take this boilerplate as a taken
 * Once you're done, go back to ../task/containers/Task.jsx
 */
import { exposeContextToComponentProps } from './exposeContextToComponentProps.jsx';
import { ensureStylesAreLoaded } from './ensureStylesAreLoaded.jsx';


/*
 * Wrap the component and take care of fetching data,
 * passing state and actions, and context
 */
export default (ChildComponent, options) => {
  const componentName = ChildComponent.displayName || ChildComponent.name;

  let ContainerComponent = ChildComponent;
  const {
    mapStateToProps,
    mapDispatchToProps,
    contextProperties,
    getData,
    styles,
  } = options;

  if (getData) {
    ContainerComponent = composeWithTracker(getData)(ContainerComponent);
  }
  if (mapStateToProps || mapDispatchToProps) {
    ContainerComponent = connect(
      mapStateToProps,
      mapDispatchToProps
    )(ContainerComponent);
  }
  if (contextProperties) {
    ContainerComponent = exposeContextToComponentProps(ContainerComponent, contextProperties);
  }
  if (styles) {
    ContainerComponent = ensureStylesAreLoaded(ContainerComponent, styles);
  }
  if (componentName) {
    ContainerComponent.displayName = componentName;
  }
  return ContainerComponent;
};
