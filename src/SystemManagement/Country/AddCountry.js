import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddCountry extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			countryName: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = () => {
		event.preventDefault();
		const countryName = this.state.countryName;
		axios.post('http://localhost:8080/addCountry', countryName)
			.then (
				alert (this.state.countryName),
			)
	}

	render() {
		return (
			<Form className="App" onSubmit={ this.handleSubmit } >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
					  <Form.Label>Country Name</Form.Label>
					  <Form.Control type="text" placeholder="Country Name" onChange={ (event) => this.setState({ countryName:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Add Country
				</Button>
			</Form>
		)
	}
}

export default AddCountry;