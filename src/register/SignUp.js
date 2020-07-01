import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import '../App.css';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			firstName:'',
			lastName:'',
			emailAddress:'',
			password:'',
			confirmPassword:''
		};
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{
				[name]: value
			}
		)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
		const user ={
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.emailAddress,
			password: this.state.password,
		}

		axios.post('http://localhost:8080/signUp', user)
				.then( res => {
				console.log(res);
				console.log(res.data);
				alert('It works')
				} ).catch(error=>{
					console.log("Error")
				})
				.then(alert(this.state.firstName))
	}

	render() {
		return (
			<div>
				<Form className="App" onSubmit={ this.handleSubmit } >
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="First Name" onChange={ (event) => this.setState({ firstName:event.target.value })} />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Last Name" onChange={ (event) => this.setState({ lastName:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Email Address" onChange={ (event) => this.setState({ emailAddress:event.target.value })} />
						</Form.Group>
					</Form.Row>
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
						Sign Up
					</Button>
		
					Already A Member!!
					<Button onClick={this.handleChange} variant="primary" type="submit">
						Login
					</Button>

				</Form>
			</div>
		)
	}
}

export default Login;