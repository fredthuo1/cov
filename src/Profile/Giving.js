import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { SideMenu } from 'react-sidemenu';
import "./Profile.css";

class Giving extends Component {

	constructor(props) {
			super(props);
		}

	render () {
		return(
			<React.Fragment className="profile">
			<div class="sidenav">
			  <a href="/Profile">Profile</a>
			  <a href="/Giving">Giving</a>
			  <a href="/Events">Events</a>
			  <a href="/Groups">Groups</a>
			</div>

		<Table class="table">
			<thead>
				<th>Date</th>
				<th>Name</th>
				<th>Batch</th>
				<th>Fund(s)</th>
				<th>Note</th>
				<th>Amount</th>
			</thead>
			<tbody>
				<td>100</td>
			</tbody>

			<tr>
				<th>Total Overview</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>

			<tr>
				<th>Total Contributions</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td> 17 </td>
			</tr>

			<tr>
				<th>Total Amount</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td> $7,989.00 </td>
			</tr>

			<tr>
				<th>Total Contributions</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td> 17 </td>
			</tr>

			<tr>
				<th>Method Overview</th>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td> Checks </td>
			</tr>
		</Table>


		</React.Fragment>
		)
	}
}
export default Giving;