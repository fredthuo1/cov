import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import "./Profile.css";


class Profile extends Component {

	constructor(props) {
			super(props);
			this.state = {	
				person: '',
				id: '',
				address: '',
				isLoaded: false,
			};
			this.componentDidMount = this.componentDidMount.bind(this);
		}

	componentDidMount() {
		axios.get('http://localhost:8080/getUser', {
		params: {
			id: this.props.location.state.id
		}
		})
		.then( res => {
			this.setState({ 
			person: res.data,
			address: res.data.address
			})
		})
	}

	render () {
	const person = this.state.person;
	const address = this.state.person.oldAddress;

	if(!this.state.address) {
		return(<div>Loading...</div>);
	} else {
	
		return(
			<React.Fragment className="profile">
				<Table responsive>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Member Type</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody> 
						<tr>
							<td>{ person.firstName }</td>
							<td>{ person.lastName }</td>
							<td>{ person.memberType }</td>
							<td><p>{ address.addressId }</p>
								<p>{ address.street }</p>
								<p>{ address.city } {''}
								{ address.state },{' '}
								{ address.zipCode }</p>
							</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
			</React.Fragment>
		)
	}
	}
}
export default Profile;