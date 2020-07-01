import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { SideMenu } from 'react-sidemenu';
import "./Profile.css";



class Profile extends Component {

	constructor(props) {
			super(props);
			this.state = {	
				person: '',
				id: '',
				addresses: [],
				isLoaded: false,
			};
			this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:8080/getPerson', {
		params: {
			id: this.props.location.state.id
		}
		})
		.then( res => {
			this.setState({ 
			person: res.data,
			addresses: res.data.addresses
			})
		})
	}

	render () {
	const person = this.state.person;
	
		return(
			<React.Fragment className="profile">
			<div class="sidenav">
			  <a href="/Profile">Profile</a>
			  <a href="/Giving">Giving</a>
			  <a href="/Events">Events</a>
			  <a href="/Groups">Groups</a>
			</div>

		<div class="container">
			<div class="avatar-flip">
				<img src="https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png" height="150" width="150" />
				<img src="https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png" height="150" width="150"/>
			</div>
			<h2>{ person.firstName } { person.middleName }. { person.lastName }</h2>
			<h4>{ person.memberType }</h4>
			<p>{ person.active }</p>
			<p>{ person.cellPhone }</p>
			<p>{ person.emailAddress }</p>
			<p>{ person.birthDate }</p> 
			<p>{ person.dateJoined }</p>
			<p>{ person.maritalStatus }</p>
			<p>
					{ this.state.addresses.map( address =>
						<tr>
						  <p><td>{ address.street }</td></p>
						  <p><td>{ address.city }</td></p>
						   <p><td>{ address.state }</td></p>
						   <p><td>{ address.zipCode }</td></p>
						   <p><td>{ address.country }</td></p>
						</tr>
					)}
			</p>
		</div> 

		</React.Fragment>
		)
	
	}
}
export default Profile;