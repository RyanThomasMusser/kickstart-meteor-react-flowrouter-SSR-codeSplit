import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../layout/containers/Layout.jsx';

import Home from './containers/Home.jsx';

export default(store) => {
	FlowRouter.route('/', {
		name: 'default',
		action: () => {
			const mountComponent = (Home) => {
				mount(Layout, {
					content: () => <Home/>,
					store
				});
			};
			if (Meteor.isServer) {
				const Home = require('./containers/Home.jsx');
				mountComponent(Home);
			} else {
				require.ensure([], (require) => {
					const Home = require('./containers/Home.jsx');
					mountComponent(Home);
				});
			}
		}
	});
};
