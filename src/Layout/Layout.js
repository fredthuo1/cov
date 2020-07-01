import React, { Component, Suspense } from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router, router, Link  } from "react-router-dom";
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import { AppHeader, AppSidebar,
		AppSidebarHeader, AppSidebarForm, AppSidebarNav2 as AppSidebarNav,
		AppSidebarFooter, AppSidebarMinimizer,
		AppFooter, AppAside, DefaultAside,
		AppBreadcrumb, 
} from '@coreui/react';
import navigation from '../_navs';
import routes from '../routes';
import './Layout.css';

class Layout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

	render() {
		return (
		<Router>
				<NavBar />
				<div clasName="app">
					<AppSidebar fixed display="lg">
						<AppSidebarHeader />
						<AppSidebarForm />
						<Suspense>
						</Suspense>
						<AppSidebarFooter />
						<AppSidebarMinimizer />
					</AppSidebar>
					<div>
					<main className="main">
						<div >
						  <Suspense fallback={this.loading()}>
							<Switch>
							  {routes.map((route) => {
								return route.component ? (
								  <Route
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={props => (
									  <route.component {...props} />
									)} />
								) : (null);
							  })}
							  <Redirect from="/" to="/App" />
							</Switch>
						  </Suspense>
						</div>
					  </main>
					  </div>
				</div>
		</Router>
		)
	}
}
export default Layout;