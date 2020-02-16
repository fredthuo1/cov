import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import AddSermonProgramItem from './AddSermonProgramItem';
import axios from 'axios';

class SermonProgramItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sermonProgramItimes: []
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount() {
		
		axios.get('http://localhost:8080/getSermonProgramItems')
		.then( res => {
			this.setState({
				sermonProgramItimes: res.data
			})
		})
	
	}

	render() {
		return (
			<div className="sermonProgramItimes" >
			<AddSermonProgramItem />
			<Table hover bordered striped responsive size="lg">
					<thead>
						<tr>
							<th>ID</th>
							<th>Item Name</th>
							<th>Report Name</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.sermonProgramItimes.map( item =>
							<tr>
								<td>{ item.Id }</td>
								<td>{ item.itemName }</td>
								<td>{ item.reportName }</td>
							</tr>
						)}
					</tbody>
				</Table>
			</div>
		)
	}

}

export default SermonProgramItems;