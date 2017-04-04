import React, {Component, PropTypes} from 'react';
import NoSSR from 'react-no-ssr';

export default class Basketball extends Component {
	static displayName = 'Basketball';

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{
				textAlign: 'center'
			}}>
				<h2>Basketball</h2>
				<ul className="nav nav-tabs nav-justified">
					<li role="presentation" className="right-tab">
						<a href="#">Daily Report</a>
					</li>
					<li role="presentation" className="active left-tab">
						<a href="#">Daily Lineup Builder</a>
					</li>
					<li role="presentation">
						<a href="#">Basketball Forum</a>
					</li>
				</ul>
			</div>
		);
	}
}
