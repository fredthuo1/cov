import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Layout = React.lazy(() => require('./Layout/Layout'));

class Main extends Component {

	render() {
		return (
			<Router>
					<Route path="/Layout" name="Layout Page" render={props => <Layout {...props}/>} />
			</Router>
		);
	}
}

export default Main;