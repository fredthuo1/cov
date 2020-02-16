import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Locale extends Component {
	render() {
		return (
			<div>
			<ul>
				<li><Link to="/Cities">Cities</Link></li>
				<li><Link to="/States">States</Link></li>
				<li><Link to="/Country">Countries</Link></li>
				<li><Link to="/SermonTime">Sermon Time</Link></li>
				<li><Link to="/SermonProgramItems">Sermon Program Items</Link></li>
			</ul>
			<ul>
				<li><Link to="/Organization">Organization</Link></li>
				<li><Link to="/Pastors">Pastors</Link></li>
				<li><Link to="/Department">Departments</Link></li>
				<li><Link to="/EmployeeCategory">Employee Category</Link></li>
				<li><Link to="/Positions">Positions</Link></li>
				<li><Link to="/MaritalStatus">Marital Status</Link></li>
			</ul>
			<ul>
				<li><Link to="/Banks">Banks</Link></li>
				<li><Link to="/MonthlyBills">Monthly Bills</Link></li>
				<li><Link to="/Vendors">Vendors</Link></li>
				<li><Link to="/PaymentMode">Payment Mode</Link></li>
				<li><Link to="/PaymentCategory">Payment Category / Expense Accounts</Link></li>
			</ul>
			<ul>
				<li><Link to="/GroupEventDescriptions">Group Event Descriptions</Link></li>
				<li><Link to="/MemberTypes">Member Types</Link></li>
			</ul>
			</div>
		)
	}
}

export default Locale;