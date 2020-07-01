import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import '../App.css';

class OrganizationRegistration extends Component {

	constructor(props) {
		super(props);
		this.state = {
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
		
		
		const organization = {
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
		}

		axios.post('http://localhost:8080/addPerson', organization )
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
				  <Form.Label>Organization Name</Form.Label>
				  <Form.Control type="text" placeholder="Organization Name" onChange={(event) => this.setState({firstName:event.target.value})} />
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
					  <Form.Label>Password</Form.Label>
					  <Form.Control type="password" placeholder="Password" onChange={(event) => this.setState({password:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Repeat Password</Form.Label>
					  <Form.Control type="password" placeholder="Repeat Password" onChange={(event) => this.setState({repeatPassword:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Phone Number</Form.Label>
					  <Form.Control type="number" placeholder="Phone Number" onChange={(event) => this.setState({cellPhone:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Street</Form.Label>
					  <Form.Control type="text" placeholder="Street" onChange={(event) => this.setState({street:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>City</Form.Label>
					  <Form.Control type="text" placeholder="City" onChange={(event) => this.setState({city:event.target.value})} />
				  </Form.Group>


				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Zip Code</Form.Label>
					  <Form.Control type="number" placeholder="Zip Code" onChange={(event) => this.setState({zipCode:event.target.value})} />
				  </Form.Group>
			  </Form.Row>

			  <Form.Row>
					<Form.Group as={Col} controlId="formGridPassword">
						  <Form.Label>State</Form.Label>
						  <Form.Control type="text" placeholder="State" onChange={(event) => this.setState({state:event.target.value})} />
					</Form.Group>

				  <Form.Group as={Col} controlId="formGridPassword">
					  <Form.Label>Country</Form.Label>
					  <Form.Control type="text" placeholder="Country" onChange={(event) => this.setState({country:event.target.value})} />
				  </Form.Group>
			  </Form.Row>
	
			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		);
	  }
}

export default OrganizationRegistration;
