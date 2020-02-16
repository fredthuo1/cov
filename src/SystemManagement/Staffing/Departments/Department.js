import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Department extends Component {

	constructor(props) {
		super(props);
		this.state = {
			departments: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8080/getDepartment')
		.then( res => {
			this.setState({
				departmentsList: res.data
			})
		})
	}

	render() {
		return(
			<div className="departmentsList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Department Id</th>
								<th>Department Name</th>
						  </tr>
						</thead>
					  <tbody>
							<tr>
								<td>{  }</td>
								<td>{  }</td>
							</tr>
					  </tbody>
				</Table>
			</div>
		)
	}
}

export default Department;