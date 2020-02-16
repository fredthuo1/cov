import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import AddState from './AddState';
import axios from 'axios';

class States extends Component {

	constructor(props) {
		super(props);
		this.state = {
			states: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {

		axios.get('http://localhost:8080/getStates')
		.then( res => {
			this.setState({
				states: res.data
			})
		} )
	}

	render() {
		return (
			<React.Fragment>
				<AddState />
				<div className="statesList">
					<Table hover bordered striped responsive size="lg">
						<thead>
							<tr>
								<th>State Id</th>
								<th>State Name</th>
								<th>State Abbreviation</th>
							</tr>
						</thead>
						<tbody>
						{ this.state.states.map( state => 
							<tr>
								<td>{ state.Id }</td>
								<td>{ state.stateName }</td>
								<td>{ state.Abbreviation }</td>
							</tr>
						) }
						</tbody>
					</Table>
				</div>
			</React.Fragment>
		)
	}
}

export default States;
