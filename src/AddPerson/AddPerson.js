import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import './AddPerson.css';

class AddPerson extends Component {

	constructor(props) {
		super(props);
		this.state = {
					firstName: '',
					middleName: '',
					lastName: '' ,
					memberType: '',
					maritalStatus: '',
					birthDate: '',
					dateJoined:'',
					cellPhone:'',
					active:'',
					emailAddress:'',
					address: {
						street: '',
						city: '',
						state: '',
						zipCode: '',
						country: '',
					}
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
		
		const address = {
			street:this.state.street,
			city:this.state.city,
			state:this.state.state,
			zipCode:this.state.zipCode,
			country:this.state.country,
		}

		const addresses = [address];
		
		
		const person = {
			firstName:this.state.firstName,
			middleName:this.state.middleName,
			lastName:this.state.lastName,
			memberType:this.state.memberType,
			address: address,
			birthDate:this.state.birthDate,
			dateJoined:this.state.dateJoined,
			active:this.state.active,
			emailAddress:this.state.emailAddress,
			maritalStatus:this.state.maritalStatus,
			cellPhone:this.state.cellPhone,
			addresses
		}

		axios.post('http://localhost:8080/addPerson', person )
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
				  <Form.Label>First Name</Form.Label>
				  <Form.Control type="text" placeholder="firstName" onChange={(event) => this.setState({firstName:event.target.value})} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridPassword">
				  <Form.Label>Middle Name</Form.Label>
				  <Form.Control type="text" placeholder="middleName" onChange={(event) => this.setState({middleName:event.target.value})} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridPassword">
				  <Form.Label>Last Name</Form.Label>
				  <Form.Control type="text" placeholder="lastName" onChange={(event) => this.setState({lastName:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					<label>
					  Member Type/ Role: 
					  <select onChange={(event) => this.setState({memberType:event.target.value})}>
						<option value=""></option>
						<option value="Pastor">Pastor</option>
						<option value="Member">Member</option>
						<option value="Employee">Employee</option>
					  </select>
					</label>
				  </Form.Group>

				  <Form.Group as={Col} controlId="formGridPassword">
					<label>
					  Marital Status: 
					  <select onChange={(event) => this.setState({maritalStatus:event.target.value})}>
						<option value=""></option>
						<option value="Single">Single</option>
						<option value="Married">Married</option>
					  </select>
					</label>
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Date Joined</Form.Label>
					  <Form.Control type="date" placeholder="Date Joined" onChange={(event) => this.setState({dateJoined:event.target.value})} />
				  </Form.Group>
			  
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Birth Day</Form.Label>
					  <Form.Control type="date" placeholder="Birth Date" onChange={(event) => this.setState({birthDate:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Email Address</Form.Label>
					  <Form.Control type="email" placeholder="Email Address" onChange={(event) => this.setState({emailAddress:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Cell Phone</Form.Label>
					  <Form.Control type="number" placeholder="phone number" onChange={(event) => this.setState({cellPhone:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Street</Form.Label>
					  <Form.Control type="text" placeholder="street" onChange={(event) => this.setState({street:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>City</Form.Label>
					  <Form.Control type="text" placeholder="city" onChange={(event) => this.setState({city:event.target.value})} />
				  </Form.Group>


				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Zip Code</Form.Label>
					  <Form.Control type="number" placeholder="zipCode" onChange={(event) => this.setState({zipCode:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
					<Form.Group as={Col} controlId="formGridPassword">
						  <Form.Label>State</Form.Label>
						  <Form.Control type="text" placeholder="zipCode" onChange={(event) => this.setState({state:event.target.value})} />
					</Form.Group>

				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Country</Form.Label>
					  <Form.Control type="text" placeholder="country" onChange={(event) => this.setState({country:event.target.value})} />
				  </Form.Group>
			  </Form.Row>
		

			<Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					<label>
					  Activity Status: 
					  <select onChange={(event) => this.setState({active:event.target.value})}>
						<option value=""></option>
						<option value="true">Active</option>
						<option value="false">Not Active</option>
					  </select>
					</label>
				  </Form.Group>
			</Form.Row>
			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		);
	  }
}

export default AddPerson;
