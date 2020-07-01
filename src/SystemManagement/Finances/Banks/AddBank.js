import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class Banks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bankName: "",
		}			
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

		const bankName = this.state.bankName;
		const bank = {
			bankName:this.state.bankName,
		}
		axios.post('http://localhost:8080/addBank', bank )
		.then(res => {
			alert('It works')
		})			
	}


	render() {

		return(
			<Form className="App" onSubmit={ this.handleSubmit } >
			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Bank Name</Form.Label>
				  <Form.Control type="text" placeholder="Bank Name" onChange={(event) => this.setState({bankName:event.target.value})} />
				</Form.Group>
			  </Form.Row>		

			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		)
	}

}

export default Banks;