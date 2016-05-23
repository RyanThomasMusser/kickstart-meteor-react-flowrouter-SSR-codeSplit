import 'TodoApp/server';
// import TodoApp from 'TodoApp/client/components/TodoApp';
// console.log('TodoApp', !!TodoApp);

require.ensure(['TodoApp/client/components/TodoApp.jsx'], function(require) {
  const TodoApp = require('TodoApp/client/components/TodoApp.jsx');
  console.log('TodoApp', !!TodoApp);
})
