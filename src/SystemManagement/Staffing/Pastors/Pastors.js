import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Pastors extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pastorsList: []
		}
		this.handleClick = this.handleClick.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				pastorsList: res.data
			})
		})
		
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="pastorsList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Pastor Id</th>
								<th>Pastor Name</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.pastorsList.map( pastor =>
							<tr>
								<td>{ pastor.Id }</td>
								<td>{ pastor.pastor }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default Pastors;
