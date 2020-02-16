import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";

class AddCity extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			city: '',
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit = () => {
		event.preventDefault();
		const city = this.state.city;
		axios.post('http://localhost:8080/addCity', city )
				.then (
					alert(this.state.city),
					console.log(this.state.city)
				)
	}

	render() {
		return (
			<Form className="App" onSubmit={ this.handleSubmit } >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
					  <Form.Label>City Name</Form.Label>
					  <Form.Control type="text" placeholder="City Name" onChange={ (event) => this.setState({ city:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Add City
			  </Button>
			</Form>
		);
	}	
}

export default AddCity;