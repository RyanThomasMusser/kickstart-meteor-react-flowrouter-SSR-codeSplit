import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../layout/containers/Layout.jsx';

import Baseball from './containers/Baseball.jsx';

export default(store) => {
	FlowRouter.route('/baseball', {
		name: 'baseball',
		action: () => {
			const mountComponent = (Baseball) => {
				mount(Layout, {
					content: () => <Baseball/>,
					store
				});
			};
			if (Meteor.isServer) {
				const Baseball = require('./containers/Baseball.jsx');
				mountComponent(Baseball);
			} else {
				require.ensure([], (require) => {
					const Baseball = require('./containers/Baseball.jsx');
					mountComponent(Baseball);
				});
			}
		}
	});
};
