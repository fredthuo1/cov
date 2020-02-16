import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Banks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			banks: []	
		}	
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				banks: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="banksList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Bank Id</th>
								<th>Bank Name</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.banks.map( bank =>
							<tr>
								<td>{ bank.Id }</td>
								<td>{ bank.bankName }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default Banks;