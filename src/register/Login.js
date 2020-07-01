import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import '../App.css';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			emailAddress:'',
			password:''
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
		
	
		const emailAddress = this.state.emailAddress;
		const password = this.state.password;

		axios.post('http://localhost:8080/login', { emailAddress: emailAddress, password: password })
			.then( function(res) {
				if ( res === 200 ) {
					window.location = "/ContactManagement"
				}
			})
			.catch( function(error) {
				window.location = "/login"
			} );
		
				
	}

	onSubmit = () => {
		this.props.history.push('/Home');
	}

	render() {
		
		if ( this.state.isSignedUp ) {
			return <Redirect to="/dashboard"/>
		}
		return (
			<div>
				<Form className="App" >
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Email Address" onChange={ (event) => this.setState({ emailAddress:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onChange={ (event) => this.setState({ passwrod:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Button onClick={this.onSubmit} variant="primary" type="submit">
						Login
					</Button>
		
					Not A Member!!
					<Button onClick={this.handleChange} variant="primary" type="submit">
						Register
					</Button>

				</Form>
			</div>
		)
	}
}

export default Login;