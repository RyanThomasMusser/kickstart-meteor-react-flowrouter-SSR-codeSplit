import ContainerFactory from '../../../lib/ContainerFactory';
import Layout from '../components/Layout.jsx';

const style = (typeof Meteor === 'undefined' || Meteor.isClient)
	? require('../css/Layout.import.css')
	: require('!css!../css/Layout.import.css');

export default new ContainerFactory(Layout, {styles: [style]});
