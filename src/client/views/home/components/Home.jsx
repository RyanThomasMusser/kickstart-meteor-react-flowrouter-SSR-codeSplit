import React, {Component, PropTypes} from 'react';
import NoSSR from 'react-no-ssr';

export default class Home extends Component {
	static displayName = 'Home';

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div id="intro-unit">
					<h2 className="white-text">A better way to play DFS and experience sports.</h2>
					<br/>
					<h3 className="white-text">Live broadcasts. Realtime optimizers. Live chat.</h3>
					<br/>
					<h4>You can beat the DFS sharks. We can help.</h4>
					<br/>
					<p>
						<a className="btn btn-primary btn-lg">Join now for FREE</a>
					</p>
				</div>
				<div className="row text-center">

					<div className="col-md-4 col-sm-4 col-xs-4 hero-feature">
						<div className="thumbnail preview" id="basketball-preview">
							<div className="caption">
								<h3 className="white-text">Basketball</h3>
								<p>Realtime lineup optimizer.</p>
								<p>Up to the minute news.</p>
								<p>Live slate broadcasts.</p>
								<p>24/7 live chat.</p>
								<p>
									<a href="/basketball" className="btn btn-default">Use for FREE</a>
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-4 hero-feature">
						<div className="thumbnail preview" id="baseball-preview">
							<div className="caption">
								<h3 className="white-text">Baseball</h3>
								<p>Realtime lineup optimizer.</p>
								<p>Up to the minute news.</p>
								<p>Live slate broadcasts.</p>
								<p>24/7 live chat.</p>
								<p>
									<a href="/baseball" className="btn btn-default">Use for FREE</a>
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4 col-sm-4 col-xs-4 hero-feature">
						<div className="thumbnail preview" id="football-preview">
							<div className="caption">
								<h3 className="white-text">Football</h3>
								<p>Realtime lineup optimizer.</p>
								<p>Up to the minute news.</p>
								<p>Live slate broadcasts.</p>
								<p>24/7 live chat.</p>
								<p>
									<a href="/football" className="btn btn-default">Use for FREE</a>
								</p>
							</div>
						</div>
					</div>

				</div>

				<hr/>
				<div className="row">
					<div className="col-sm-8 text-center">
						<h4 className="white-text">Why DFSRoto?</h4>
						<p className="promise-paragraph">The DFSRoto community looks out for one another. No sharks, no scams and no bait and switch. Our users are stakeholders in the company - they have a say in the way the site is run.
						</p>
						<p className="promise-paragraph">Don't believe us? Head over to our forums, or check us out on twitter, and see what the community has to say about the site and what we're up to.
						</p>
						<p className="promise-paragraph">The community has grown organically by word of mouth. We don't pay for advertising. We don't need to.
						</p>
						<p className="promise-paragraph">
							The community believes in DFSRoto.com - Give us a try, we know you'll believe in us as well. We are so confident that we are offer a free trial of our paid services. No credit card, no hassles, just try the paid product for free.
						</p>
						<br/>
						<p>
							<a className="btn btn-primary" href="#">Join now for FREE</a>
						</p>
					</div>
					<div className="col-sm-4 text-center">
						<img src="./DFSRotoLogoSmall.png"/>
						<address>
							<h2 className="white-text">DFS Roto</h2>
							<br/>2275 Jackson
							<br/>San Francisco, CA 94115
							<br/>
						</address>
						<address>
							<abbr title="Phone">P:</abbr>&nbsp;(650) 454-6660
							<br/>
							<abbr title="Email">E:</abbr>&nbsp;
							<a href="mailto:#">RyanThomasMusser@example.com</a>
						</address>
					</div>
				</div>
			</div>
		);
	}
}
