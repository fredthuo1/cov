import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class MaritalStatus extends Component {

	constructor(props) {
		super(props);
		this.state = {
			maritalStatusList: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				maritalStatusList: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="maritalStatusList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Marital Status Id</th>
								<th>Marital Status Description</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.maritalStatusList.map( maritalStatus =>
							<tr>
								<td>{ maritalStatus.Id }</td>
								<td>{ maritalStatus.Description }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default MaritalStatus;