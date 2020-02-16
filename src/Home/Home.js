import React, { Component } from 'react';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import './Home.css';

class Home extends Component {
render () {
	return (
		<React.Fragment>
			<AppSidebarToggler className="d-md-down-none" display="lg" />
			<AppSidebarToggler className="d-lg-none" display="md" mobile />
			<AppNavbarBrand/>
		</React.Fragment>
		)	
}

}
export default Home;