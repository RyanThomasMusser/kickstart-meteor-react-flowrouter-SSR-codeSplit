import React, {Component, PropTypes} from 'react';

export default class Header extends Component {
	static displayName = 'Header';

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="/">
								<img alt="Brand" src="/DFSRotoLogoSmallNav.jpg"/>
							</a>
						</div>

						{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="/">Home
									</a>
								</li>
								<li>
									<a href="/basketball">Basketball</a>
								</li>
								<li>
									<a href="/baseball">Baseball</a>
								</li>
								<li>
									<a href="/football">Football</a>
								</li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account
										<span className="caret"></span>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a href="#">Login</a>
										</li>
										<li>
											<a href="#">My Profile</a>
										</li>
										<li>
											<a href="#">Subscription</a>
										</li>
										<li role="separator" className="divider"></li>
										<li>
											<a href="#">Logout</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						{/*<!-- /.navbar-collapse -->*/}
					</div>
					{/*<!-- /.container-fluid -->*/}
				</nav>
			</div>
		);
	}
}
