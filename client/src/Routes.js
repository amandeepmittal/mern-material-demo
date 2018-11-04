import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoutes';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';

class Routes extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoutes path="/user/edit/:userId" />
					<Route path="/user/:userId" component={Profile} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
				</Switch>
			</div>
		);
	}
}

export default Routes;
