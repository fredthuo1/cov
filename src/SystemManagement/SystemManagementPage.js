import React, { Component } from 'react';
import Locale from '../SystemManagement/Locale';
import '../App.css';
class SystemManagementPage extends Component {
	
	render() {
		return (
			<div className="locale" >
			<Locale />
			</div>
		)
	}
}
export default SystemManagementPage;