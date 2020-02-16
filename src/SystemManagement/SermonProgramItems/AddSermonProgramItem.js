import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddSermonProgramItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			itemName:  '',
			reportName: '',
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

	handleSubmit = () => {
		event.preventDefault();
		const sermonProgramItem ={
			itemName:this.state.itemName,
			reportName:this.state.reportName,
		}
		axios.post('http://localhost:8080/addSermonProgramItem', sermonProgramItem)
			.then(
				alert (this.state.itemName)
			)
	}

	render() {
		return (
			<div>
				<Form className="App" >
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Item Name</Form.Label>
							<Form.Control type="text" placeholder="Item Name" onChange={ (event) => this.setState({ itemName:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Report Name</Form.Label>
							<Form.Control type="text" placeholder="Report Name" onChange={ (event) => this.setState({ reportName:event.target.value })} />
						</Form.Group>
					</Form.Row>
					<Button onClick={this.handleChange} variant="primary" type="submit">
						Add Item
					</Button>
				</Form>
			</div>
		)
	}
}

export default AddSermonProgramItem;
