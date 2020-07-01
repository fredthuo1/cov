import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import '../App.css';

class AddGroup extends Component {

	constructor(props) {
		super(props);
		this.state = {
					name:'',
					groupDescription:''
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
		
		const name = this.state.name;
		const groupDescription = this.state.groupDescription;

		axios.post('http://localhost:8080/addGroup', {
			name, groupDescription
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
				  <Form.Label>Group Name</Form.Label>
				  <Form.Control type="text" placeholder="Group Name" onChange={(event) => this.setState({name:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			   <Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				  <Form.Label>Group Description</Form.Label>
				  <Form.Control type="text" placeholder="Group Description" onChange={(event) => this.setState({groupDescription:event.target.value})} />
				</Form.Group>
			  </Form.Row>

			  <Button onClick={this.handleChange} variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
		);
	  }
}

export default AddGroup;