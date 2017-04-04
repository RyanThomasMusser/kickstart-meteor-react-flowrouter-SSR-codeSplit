/*
 * A container for the header of the todos feed
 */

import ContainerFactory from '../../../lib/ContainerFactory';

import {createTask, toggleHideCompleted} from '../actions/actions.js';

import Basketball from '../components/Basketball.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient)
	? require('../css/Basketball.import.css')
	: require('!css!../css/Basketball.import.css');

export default new ContainerFactory(Basketball, {
	styles: [style],
	contextProperties: ['Meteor'],
	getData(props, onData) {
		const {context: {
				Meteor
			}} = props;
		onData(null, {userId: Meteor.userId()});
	},
	mapStateToProps: (state) => ({hideCompleted: state.tasks.hideCompleted}),
	mapDispatchToProps(dispatch, {context}) {
		return {
			createTask: (description) => {
				dispatch(createTask(context, description));
			},
			toggleHideCompleted: () => {
				dispatch(toggleHideCompleted());
			}
		};
	}
});
