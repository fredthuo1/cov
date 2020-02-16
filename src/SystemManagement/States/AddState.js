import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";

class AddState extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			state:'',
			abr:'',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = () => {
		event.preventDefault();
		const state = this.state.state;
		const abr = this.state.abr;
		axios.post('http://localhost:8080/addState', null, {
			params: {
				state,
				abr
			}
		} )
		.then (
			alert(this.state.state),
			alert(this.state.abr)
		)
	}

	render() {
		return (
			<Form className="App" onSubmit={ this.handleSubmit } >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>State Name</Form.Label>
						<Form.Control type="text" placeholder="State Name" onChange={ (event) => this.setState({ state:event.target.value })} />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>State Abreviation</Form.Label>
						<Form.Control type="text" placeholder="State Abreviation" onChange={ (event) => this.setState({ abr:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Button varient="primary" type="submit">
					Add State
				</Button>
			</Form>
		)
	}
}

export default AddState;