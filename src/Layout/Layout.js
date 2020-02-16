import React, { Component, Suspense } from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router, router, Link  } from "react-router-dom";
import Home from '../Home/Home';
import './Layout.css';
import { AppHeader, AppSidebar,
		AppSidebarHeader, AppSidebarForm, AppSidebarNav2 as AppSidebarNav,
		AppSidebarFooter, AppSidebarMinimizer,
		AppFooter, AppAside, DefaultAside,
		AppBreadcrumb, 
} from '@coreui/react';
import navigation from '../_navs';
import routes from '../routes';

class Layout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

	render() {
		return (
		<Router>
				<div clasName="app">
					<AppHeader fixed>  
					<Suspense>
						<Home />
					</Suspense>
					</AppHeader>

					<AppSidebar fixed display="lg">
						<AppSidebarHeader />
						<AppSidebarForm />
						<Suspense>
					    <AppSidebarNav navConfig={navigation} {...this.props} router={router} />
						</Suspense>
						<AppSidebarFooter />
						<AppSidebarMinimizer />
					</AppSidebar>
					<div>
					<main className="main">
						<AppBreadcrumb appRoutes={routes} router={router}/>
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
					<AppAside fixed>
						
					  </AppAside>
					<AppFooter>
          
					</AppFooter>
				</div>
		</Router>
		)
	}
}
export default Layout;