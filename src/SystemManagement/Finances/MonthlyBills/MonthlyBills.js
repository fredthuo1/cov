import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class MonthlyBills extends Component {

	constructor(props) {
		super(props);
		this.state = {
			monthlyBills: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				monthlyBills: res.data
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
								<th>Bill Id</th>
								<th>Bill Name</th>
								<th>Company Name</th>
								<th>Company Address</th>
								<th>Account Number</th>
								<th>Phone Number</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.monthlyBills.map( monthlyBill =>
							<tr>
								<td>{ monthlyBill.monthlyBill }</td>
								<td>{ monthlyBill.billName }</td>
								<td>{ monthlyBill.companyName }</td>
								<td>{ monthlyBill.companyAddress }</td>
								<td>{ monthlyBill.accountNumber }</td>
								<td>{ monthlyBill.phoneNumber }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default MonthlyBills;