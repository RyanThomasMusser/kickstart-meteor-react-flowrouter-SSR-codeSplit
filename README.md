# Intro

Skeleton project for **Meteor** with **React**, **Redux**, **Webpack**, **FlowRouter**, Server side rendering (**SSR**) and code **splitting**!
It's the skeleton project I wish I'd had when starting a serious Meteor project. It aims at providing all the structure and boilerplate for a modern web app.

If you like it, give it some stars :)

### Goal
Provide an excellent starting point for an ambitious Meteor app. There's probably some overkills if you're doing a hackathon project.

### How to help
I'd love to get contributions on what you wish you'd knew when you got seriously started. There're are a few things that come in mind: more tests, deployement scripts, mantra, etc. But any idea/feedback/PR is welcomed!

## Sharing experience about the key technologies:
### Meteor
[Meteor](https://docs.meteor.com) is a fullstack javascript framework.

It's great at:
- **managing data**: everything is reactive and it's taken care of for you; client and server data logic can be shared.
- **optimistic UI**: the client is able to anticipate server responses and instantly updates the UI (-> great UX)
- **npm**: anything that is in npm, you can get it within Meteor.
- **lot of time saved** when getting started:
  - build for production is taken care off. It refreshes clients live.
  - isomorphism: you can share code between client and server.
  - plenty of awesome community packages. I could not emphasize it enough.

It is not great at:
- **build time**: client and server rebuilds are not super fast, and can be very long. It's not easy nor transparent to use other build build tools you might be used to or want to use, because they do a better job at what they've been build for (like webpack).
- being opiniated: it wraps your entire stack, but doesn't tell you which rendering frameworks, or which databases type to use. While that sounds awesome it also splits the effort of the community and Meteor team.

### React
[React](https://facebook.github.io/react/), from Facebook, is a front end framework that manages app logic and UI rendering.

It's great because:
- the design pattern (UI is a function of state) is very clear. It makes your client logic beautiful.
- rendering is very smart and efficient.
- it has two parts: the logic and the UI. The UI depends on the platform (Web, iOS, Android) but the logic remains the same. Learn once, write anywhere.
- it can be used for native apps with React Native.
- documentation is awesome
- it has a big community behind it

It's not great because:
- it's one more thing to learn
- it represents a decent amounts of kb of code to bundle with the app

### Redux
[Redux](https://github.com/reactjs/redux) is an implementation of Flux, which is a pattern to handle app logic.

It's great because:
- it makes things super clean and help your codebase to scale.
- it's very well documented.

It's not great because:
- it feels like boilerplate

### Webpack
[Webpack](https://webpack.github.io/) is a build process for web apps.

It's great because:
- it's super customisable, and can do a loooot.
- it refreshes client code almost instantly. That will improve development by a lot (there're other ways to do just that)
- it is becoming the default in the node community

It's not great because:
- it's one more thing to learn
- startup build takes a while
- it doesn't play very well with Meteor, because Meteor is not super complient with node standards (but getting there) and has different build standards.

### FlowRouter
[FlowRouter](https://github.com/kadirahq/flow-router/tree/ssr) is a great router for Meteor. It can handle server side rendering.

### Code splitting
Code splitting is the idea of having a client app that loads its code by chunks when needed instead of all at once.

### Storybook
[Storybook](https://github.com/kadirahq/react-storybook) is a great way to see your UI components in isolation, to make sure all looks good and to quickly work on a single component.

### Tests
Tests.. well you should write them! Here I show how to write unit tests on UI components, but there's much more to do.

# Running
## Installation
```shell
git clone https://github.com/gsabran/kickstart-meteor-react-flowrouter-SSR-codeSplit.git
cd kickstart-meteor-react-flowrouter-SSR-codeSplit
npm install
```

## Run
- Meteor
```shell
meteor
```
- Storybook
```shell
npm run storybook
```
- tests / lint
```shell
npm run testonly
npm run lint
npm run test # both test and lint
```

## Understand
- play around with the app at http://localhost:3000 to see what it does. It's basic.
- **open `./package.json` and follow the comments**

## Production
Use mupx

# Things to be aware of
- SSR prevents Hot Module Reload (HMR) since the server compile client code and therefore rebuild everytime you change it. You probably want to disable SSR in development. To do that, change [this line](https://github.com/gsabran/kickstart-meteor-react-flowrouter-SSR-codeSplit/blob/master/src/server/index.js#L28)
- code splitting only works on the client so you will see code like
```js
  // src/task/router.jsx
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
        - on the server, the style is added in the head as raw text with a utility function that is part of the boilerplate
        - style gets loaded differently on the client and the server:
```js
        // src/task/components/Task.jsx
        const style = Meteor.isClient ?
          require('../css/Task.import.css') :
          require('!css!../css/Task.import.css');
```
