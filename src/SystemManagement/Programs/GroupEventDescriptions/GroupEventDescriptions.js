import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class GroupEventDescriptions extends Component {

	constructor(props) {
		super(props);
		this.state = {
			groupEvents: []
		}
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				groupEvents: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="groupEvents">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Id</th>
								<th>Event Description</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.groupEvents.map( groupEvent =>
							<tr>
								<td>{ groupEvent.Id }</td>
								<td>{ groupEvent.eventDescription }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default GroupEventDescriptions;