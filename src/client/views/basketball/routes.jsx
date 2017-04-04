import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../layout/containers/Layout.jsx';

import Basketball from './containers/Basketball.jsx';

export default(store) => {
	FlowRouter.route('/basketball', {
		name: 'basketball',
		action: () => {
			const mountComponent = (Basketball) => {
				mount(Layout, {
					content: () => <Basketball/>,
					store
				});
			};
			if (Meteor.isServer) {
				const Basketball = require('./containers/Basketball.jsx');
				mountComponent(Basketball);
			} else {
				require.ensure([], (require) => {
					const Basketball = require('./containers/Basketball.jsx');
					mountComponent(Basketball);
				});
			}
		}
	});
};
