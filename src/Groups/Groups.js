import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import axios from "axios";
import './Groups.css';

class Groups extends Component {

	constructor(props) {
		super(props);
		this.state = {
			groups: [],
			group: '',
			value: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
		this.renderProfile = this.renderProfile.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		axios.get( 'http://localhost:8080/groups' )
		.then( res => {
			this.setState({ groups: res.data })
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ group: this.state.value });

		const groups = this.state.groups;
		axios.get('http://localhost:8080/groups', {
			params: {
				group: this.state.group
			}
		} )
		.then( res => {
			group: res.date
		} )
				.then( res => {
				console.log(res);
				console.log(res.data);
				alert('It works')
				} ).catch(error=>{
					console.log("Error")
				})
				.then(alert(this.state.street))
	}

	handleClick() {
		history.goBack()
	}

	viewProfile=()=> {
		person: this.state.person
	}

	renderProfile() {
		return <Profile value={ this.person.id }/>
	}

	addPerson() {
		
	}


	  render() {
		return (
			<div>	
			<div className="buttons">
				<Link to="/addGroup"><Button onClick={ this.handleClick }>Add Group</Button></Link>
			</div>

			<div className="buttons">
				<Button onClick={ this.addPerson }>Add person to Group</Button>
			</div>

			<Table class="table">
				<tr>
					<th>Group Name</th>
					<td>Role Description</td>
				</tr>
			</Table>
			</div>
			
		);
	  }
}

export default Groups;
