import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddSermonTime from './AddSermonTime';
import axios from 'axios';

class SermonTime extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			sermonTimes: []
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount() {
		axios.get('http://localhost:8080/getSermonTime')
		.then( res => {
			this.setState({
				sermonTimes: res.data
			})
		} )
	}

	render() {
		return (
			<div className="sermonTimes">
				<AddSermonTime />
				<Table hover bordered striped responsive size="lg">
					<thead>
						<tr>
							<th>ID</th>
							<th>Sermon Time</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.sermonTimes.map( sermonTime =>
							<tr>
								<td>{ sermonTime.id }</td>
								<td>{ sermonTime.sermonTime }</td>
								<td>{ sermonTime.description }</td>
							</tr>
						)}
					</tbody>
				</Table>
			</div>
		)
	}
}
export default SermonTime;