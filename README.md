Kickstart a project with Meteor, Webpack, React, FlowRouter, Redux, SSR and code splitting!

# About this project
It extends [kickstart-meteor-react-flowrouter](https://github.com/thereactivestack/kickstart-meteor-react-flowrouter) by adding
- **Containers** structure and **Redux**
- **Server side rendering** (SSR) using flow-router-ssr
- **Code splitting**: only load the code for the current route
- **storybook**
- **tests**

# setup
## 1: install and launch the server
```shell
git clone https://github.com/gsabran/kickstart-meteor-react-flowrouter-redux-ssr-code-splitting.git
cd kickstart-meteor-react-flowrouter-ssr-code-splitting
npm install babel-eslint -g
npm install
meteor
```

## 2: use it
- in your favorite browser (Chrome) go to http://localhost:3000
- you might have to wait a bit for the server to start

## 3: understand it
- play around with the app at http://localhost:3000 to see what it does. It's basic
- open `./package.json` and follow the comments

# things to be aware of
- SSR prevents Hot Module Reload (HMR) since the server compile client code and therefore rebuild everytime you change it. You probably want to disable SSR in development. To do that, change [this line](https://github.com/gsabran/kickstart-meteor-react-flowrouter/blob/master/src/TodoApp/server/index.js)
- code splitting only works on the client so you will see code like
```js
  // TodoApp/task/router.jsx
  if (Meteor.isServer) {
    const TaskContainer = require('./containers/Task.jsx');
    mountComponent(TaskContainer);
  } else {
    require.ensure([], function(require) {
      const TaskContainer = require('./containers/Task.jsx');
      mountComponent(TaskContainer);
    });
  }
  ```
  that loads code differently in the server and the client. This boilerplate is a bit annoying :)
- style doesn't get added by default on the server (when doing SSR) so:
    - by default SSR would produce a code with missing style and the page would be ugly until the client side code runs
    - to avoid that:
        - style gets loaded differently on the client and the server:
```js
        // TodoApp/task/components/Task.jsx
        const style = Meteor.isClient ?
          require('../css/Task.import.css') :
          require('!css!../css/Task.import.css');
```
        - on the server, the style is added in the head as raw text with a utility function that is part of the boilerplate



# Production
You can use meteor run, meteor build, mup or anything working with Meteor.

## Run in production mode
`meteor run --production`

## Build for production
`meteor build .`

## Deploy with Meteor-up
`mup deploy`

## Storybook
I've added a few stories using https://github.com/kadirahq/react-storybook. Run
```shell
$ npm run storybook
```

And open your browser at http://localhost:9001 to see isolated UI components.
