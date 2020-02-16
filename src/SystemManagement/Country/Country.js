import React, { Component } from 'react';
import AddCountry from './AddCountry';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Country extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {

		axios.get('http://localhost:8080/getCountries')
		.then( res => {
			this.setState({
				countries: res.data
			})
		} )
	}

	render() {
		return (
			<React.Fragment>
				<AddCountry />
				<div className="statesList">
						<Table hover bordered striped responsive size="lg">
							<thead>
								<tr>
									<th>Country Id</th>
									<th>Country Name</th>
								</tr>
							</thead>
							<tbody>
							{ this.state.countries.map( country => 
								<tr>
									<td>{ country.Id }</td>
									<td>{ country.countryName }</td>
								</tr>
							) }
							</tbody>
						</Table>
				</div>
			</React.Fragment>
		)
	}
}

export default Country;