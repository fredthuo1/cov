import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Vendors extends Component {

	constructor(props) {
		super(props);
		this.state = {
			vendors: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				vendors: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="monthlyBills">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Vendor Id</th>
								<th>Vendor Name</th>
								<th>Vendor Phone Number</th>
								<th>Vendor Contact</th>
								<th>Vendor Address</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.vendors.map( vendor =>
							<tr>
								<td>{ vendor.Id }</td>
								<td>{ vendor.vendorName }</td>
								<td>{ vendor.phoneNumber }</td>
								<td>{ vendor.vendorContact }</td>
								<td>{ vendor.vendorAddress }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default Vendors;