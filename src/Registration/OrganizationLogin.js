import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import '../App.css';

class OrganizationLogin extends Component {

	constructor(props) {
		super(props);
		this.state = {
					phoneNumber: '',
					email: '',
					password: ''
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

		axios.post('http://localhost:8080/login', {
				params: {
					email: this.state.email,
					password: this.state.password
				}
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


	  render() {
		return (
			<Form className="App" onSubmit={ this.handleSubmit } >
			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Email Address</Form.Label>
				  <Form.Control type="email" placeholder="Email" onChange={(event) => this.setState({email:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Password</Form.Label>
					  <Form.Control type="password" placeholder="Password" onChange={(event) => this.setState({password:event.target.value})} />
				  </Form.Group>
			  </Form.Row>
	
			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		);
	  }
}

export default OrganizationLogin;
