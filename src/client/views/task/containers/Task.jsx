/*
 * 10.0
 * We follow the pattern container/component. It's a very important one:
 * Components take care of all the UI, and are pretty "dumb" about everything else.
 * Containers take care of no UI at all, and abstract a few things from the component including:
 *   - data fetching
 *   - passing all functions to interact with outside components, or the app itself
 *
 * It feels like boilerplate, and it's kind of what it is,
 * but it also makes your app much much more organized
 */

/*
 * 10.1
 * ContainerFactory is a utility function that abstracts the interactions with:
 *    - loading data reactively
 *    - interacting with Redux and the app state
 *    - loading style in initial page load when doing SSR
 */
import ContainerFactory from '../../../lib/ContainerFactory';
/*
 * 10.2
 * Check out ../../../lib/ContainerFactory/index.js (do it now!)
 */

/*
 * 12.0
 * If you've skipped 10.2, go back to 10.2 :)
 * Let's not see how we can use ContainerFactory to abstract some boilerplate
 */

/*
 * 12.1
 * We load some redux actions.
 * If you're not familiar with Redux, go read there tutorial, it's excellent
 */
import {
  toggleTaskPrivacy,
  toggleTaskStatus,
  deleteTask,
} from '../actions/actions.js';

/*
 * 12.2
 * We load the UI component. Remember this is a dumb component that doesn't know much
 */
import Task from '../components/Task.jsx';

/*
 * 12.3
 * On the client, we load the stylesheet directly
 * (it'll get merged with other style sheets if needed, no worries)
 * On the server, we use it for server side rendering. It'll appear in the initial page load.
 * I'm not 100% satisfied of the structure here
 * (it works well but it's not super clear)
 */
const style = (typeof Meteor === 'undefined' || Meteor.isClient) ?
  require('../css/Task.import.css') :
  require('!css!../css/Task.import.css');

/*
 * 12.4
 * Let's now see how we use ContainerFactory:
 */
export default new ContainerFactory(Task, {
  // this ensure style is going to be ok
  styles: [style],

  // Those variables will be available in props under context.
  // We do that so we don't load any Meteor package directly
  contextProperties: [
    'Meteor',
    'Collections',
    'FlowRouter',
  ],

  // Reactively load some data
  getData(props, onData) {
    const { taskId, context, deleteTaskAndRedirect } = props;

    // if you need Meteor here, don't forget to pass it in contextProperties
    const { Meteor, Collections: { Tasks }, FlowRouter } = context;

    if (Meteor.subscribe('task', { _id: taskId }).ready()) {
      const task = Tasks.findOne({ _id: taskId });

      // don't forget that the first argument is the error, I always forget!
      onData(null, {
        task,
        userId: Meteor.userId(),
        deleteTaskAndRedirect: deleteTaskAndRedirect(FlowRouter),
        ...props,
      });
    }
  },

  // let the dumb UI component interact with Redux store
  mapDispatchToProps(dispatch, { context }) {
    return {
      toggleTaskPrivacy: (taskId) => { dispatch(toggleTaskPrivacy(context, taskId)); },
      toggleTaskStatus: (taskId) => { dispatch(toggleTaskStatus(context, taskId)); },
      deleteTaskAndRedirect: (taskId) => (FlowRouter) => {
        dispatch(deleteTask(context, taskId));
        FlowRouter.go('default');
      },
    };
  },
});
/*
 * 12.6
 * We're done with boilerplate!!
 * Go to ../components/Tasks.jsx
 */
