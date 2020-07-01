import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddMonthlyBill extends Component {

	constructor(props) {
		super(props);
		this.state = {
			billName: '',
			companyName: '',
			accountNumber: '',
			phoneNumber: '',
			companyAddress: {
				street: '',
				city: '',
				state: '',
				zipCode:'',
				country: '',
			}
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

		const companyAddress = {
			street:this.state.street,
			city:this.state.city,
			state:this.state.state,
			zipCode:this.state.zipCode,
			country:this.state.country,
		}

		const monthlyBill = {
			billName:this.state.billName,
			companyName:this.state.companyName,
			accountNumber:this.state.accountNumber,
			phoneNumber:this.state.phoneNumber,
			companyAddress:this.state.companyAddress,
		}

		axios.post('http://localhost:8080/addMonthlyBill', monthlyBill )
		.then(res => {
			alert('It works')
		})			
	}


	render() {

		return(
			<Form className="App" onSubmit={ this.handleSubmit } >
			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Bill Name</Form.Label>
				  <Form.Control type="text" placeholder="Bill Name" onChange={(event) => this.setState({billName:event.target.value})} />
				</Form.Group>
			  </Form.Row>
			  
			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Company Name</Form.Label>
				  <Form.Control type="text" placeholder="Company Name" onChange={(event) => this.setState({companyName:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Account Number</Form.Label>
				  <Form.Control type="text" placeholder="Account Number" onChange={(event) => this.setState({accountNumber:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			   <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Phone Number</Form.Label>
				  <Form.Control type="number" placeholder="Phone Number" onChange={(event) => this.setState({phoneNumber:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			   <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Company Address</Form.Label>
				  <Form.Control type="text" placeholder="Street" onChange={(event) => this.setState({street:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			   <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Control type="text" placeholder="City" onChange={(event) => this.setState({city:event.target.value})} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Control type="text" placeholder="State" onChange={(event) => this.setState({state:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Control type="number" placeholder="Zip Code" onChange={(event) => this.setState({zipCode:event.target.value})} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Control type="text" placeholder="Country" onChange={(event) => this.setState({country:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		)
	}

}

export default AddMonthlyBill;