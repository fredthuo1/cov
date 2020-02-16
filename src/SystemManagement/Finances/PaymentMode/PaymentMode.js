import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class PaymentMode extends Component {

	constructor(props) {
		super(props);
		this.state = {
			paymentModes: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				paymentModes: res.data
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
								<th>Payment Mode Id</th>
								<th>Payment Mode Name</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.paymentModes.map( paymentMode =>
							<tr>
								<td>{ paymentMode.Id }</td>
								<td>{ paymentMode.paymentModeName }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default PaymentMode;