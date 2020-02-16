import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import AddOrganization from './AddOrganization';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Organization extends Component {

	constructor(props) {
		super(props);
		this.state = {
			organization: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8080/getOrganization')
		.then( res => {
			organization: res.data
		})
	}

	render() {
		return (
			<React.Fragment>
				<Link to="/AddOrganization">AddOrganization</Link>
				<div className="statesList">
						<Table hover bordered striped responsive size="lg">
							<thead>
								<tr>
									<th>Organization Id</th>
									<th>Organization Name</th>
									<th>Organization Address</th>
									<th>Organization Phone Number</th>
								
									<th>Fax Number</th>
									<th>Website</th>
									<th>Email</th>
									<th>Slogan</th>
								
									<th>Federal Id</th>
									<th>State Id</th>
									<th>Logo</th>
								</tr>
							</thead>
							<tbody>
							{ this.state.organization.map( item =>
								<tr>
									<td>{ item.Id }</td>
									<td>{ item.organizationName }</td>
									<td>{ item.address }</td>
									<td>{ item.phoneNumber }</td>
								
									<td>{ item.faxNumber }</td>
									<td>{ item.website }</td>
									<td>{ item.Email }</td>
									<td>{ item.slogan }</td>

									<td>{ item.federalId }</td>
									<td>{ item.stateId }</td>
									<td>{ item.logo }</td>
								</tr>
							)}
							</tbody>
						</Table>
				</div>
			</React.Fragment>
		)
	}
}

export default Organization;