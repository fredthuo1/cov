import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Positions extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			positionsList: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				positionsList: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="positionList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Position Id</th>
								<th>Position Name</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.positionsList.map( position =>
							<tr>
								<td>{ position.Id }</td>
								<td>{ position.positionName }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default Positions;