import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../layout/containers/Layout.jsx';

import Football from './containers/Football.jsx';

export default(store) => {
	FlowRouter.route('/football', {
		name: 'football',
		action: () => {
			const mountComponent = (Football) => {
				mount(Layout, {
					content: () => <Football/>,
					store
				});
			};
			if (Meteor.isServer) {
				const Football = require('./containers/Football.jsx');
				mountComponent(Football);
			} else {
				require.ensure([], (require) => {
					const Football = require('./containers/Football.jsx');
					mountComponent(Football);
				});
			}
		}
	});
};
