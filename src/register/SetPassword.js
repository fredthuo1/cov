import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import queryString from 'query-string';
import '../App.css';

class SetPassword extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			firstName:'',
			lastName:'',
			emailAddress: 'fredthuo1@gmail.com',
			password:'',
			confirmPassword:'',
			user: ''
		};
		this.handleChage = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange () {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{
				[name]: value
			}
		)
	}

	componentDidMount() {
		
		const { match: { params } } = this.props;
		const queryString = require('query-string');
		const email = queryString.parse( this.props.location.search );
		this.setState({ emailAddress: email });

		axios.get(`http://localhost:8080/getUser/${this.props.location.search}` )
		.then( res => {
			this.setState({ 
			user: res.data,
			})
		})
		.then( alert( this.state.emailAddress ) );
	}


	handleSubmit = (event) => {
		axios.post('http://localhost:8080/addPerson', {
			email: this.state.emailAddress,
			password: this.state.password 
		})
				.then( res => {
				console.log(res);
				console.log(res.data);
				alert('It works')
				} ).catch(error=>{
					console.log("Error")
				})
				.console.log( this.state.emailAddress );
	}

	render() {
		return (
			<div>
				<Form className="App" onSubmit={ this.handleSubmit } >
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onChange={ (event) => this.setState({ password:event.target.value })} />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label> Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Confirm Password" onChange={ (event) => this.setState({ confirmPassword:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Button onClick={this.handleChange} variant="primary" type="submit">
						Set Password
					</Button>

				</Form>
			</div>
		)
	}
}

export default SetPassword;