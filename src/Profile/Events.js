import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { SideMenu } from 'react-sidemenu';
import "./Profile.css";



class Events extends Component {

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
				<th>Event Name</th>
				<th>Date</th>
			</thead>
			<tbody>
				<td>Event Name</td>
				<td>Date</td>
			</tbody>
		</Table>

		</React.Fragment>
		)
	}
}
export default Events;