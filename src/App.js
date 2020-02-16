import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
					firstName: '',
					lastName: '' ,
					memberType: '',
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
		
		const address ={
			street:this.state.street,
			city:this.state.city,
			state:this.state.state,
			zipCode:this.state.zipCode,
			country:this.state.country,
		}
		
		
		const person ={
			firstName:this.state.firstName,
			lastName:this.state.lastName,
			memberType:this.state.memberType,
			address: address,
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
				  <Form.Label>Last Name</Form.Label>
				  <Form.Control type="text" placeholder="lastName" onChange={(event) => this.setState({lastName:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
				  <form >
					<label>
					  Member Type/ Role:
					  <select onChange={(event) => this.setState({memberType:event.target.value})}>
						<option value="Pastor">Pastor</option>
						<option value="Member">Member</option>
						<option value="Employee">Employee</option>
					  </select>
					</label>
				  </form>
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
					  <Form.Control type="text" placeholder="zipCode" onChange={(event) => this.setState({zipCode:event.target.value})} />
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
		
			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		);
	  }
}

export default App;
