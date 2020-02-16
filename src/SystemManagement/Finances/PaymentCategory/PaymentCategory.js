import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class PaymentCategory extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			paymentCategorys: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				paymentCategorys: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="paymentCategorys">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Id</th>
								<th>Payment Category</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.paymentCategorys.map( paymentCategory =>
							<tr>
								<td>{ paymentCategory.Id }</td>
								<td>{ paymentCategory.paymentCategoryName }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default PaymentCategory;