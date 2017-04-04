import React, {Component, PropTypes} from 'react';
import NoSSR from 'react-no-ssr';

export default class Football extends Component {
	static displayName = 'Football';

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{
				textAlign: 'center'
			}}>
				<h2>Football</h2>
				<ul className="nav nav-tabs nav-justified">
					<li role="presentation" className="right-tab">
						<a href="#">Daily Report</a>
					</li>
					<li role="presentation" className="active left-tab">
						<a href="#">Daily Lineup Builder</a>
					</li>
					<li role="presentation">
						<a href="#">Football Forum</a>
					</li>
				</ul>
			</div>
		);
	}
}
