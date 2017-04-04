import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
	static displayName = 'Footer';

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-bottom">
				<div className="container">
					Footer
				</div>
			</nav>
		);
	}
}
