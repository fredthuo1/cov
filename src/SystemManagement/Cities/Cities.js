import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCity from './AddCity';
import axios from 'axios';

class Cities extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cities: []
		}
		this.handleClick = this.handleClick.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8080/getCities')
		.then( res => {
			this.setState({
				cities: res.data
			})
		} )
	}

	handleClick() {
		history.goBack()
	}


	render() {
		return (
			<div className="citiesList">
				<AddCity />
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
							 <th>City Name</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.cities.map( city =>
							<tr>
							  <td>{ city.cityName }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>	
		)
	}
}
export default Cities;