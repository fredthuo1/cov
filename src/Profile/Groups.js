import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { SideMenu } from 'react-sidemenu';
import "./Profile.css";
import "../Groups.css";

class Groups extends Component {

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
			<tr>
				<th>Group Name</th>
				<td>Role Description</td>
			</tr>
		</Table>

		</React.Fragment>
		)
	}
}
export default Groups;