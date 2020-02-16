import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddSermonTime extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			sermonTime: '',
			description: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		const sermonTime ={
			sermonTime:this.state.sermonTime,
			description:this.state.description,
		}
		axios.post('http://localhost:8080/addSermonTime', sermonTime)
			.then(
				alert (this.state.sermonTime),
			)
	}

	render() {
		return (
			<Form className="App" >
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Time</Form.Label>
						<Form.Control type="text" placeholder="Sermon Time" onChange={ (event) => this.setState({ sermonTime:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Button onClick={this.handleChange} variant="primary" type="submit">
					Add Sermon Time
				</Button>
			</Form>
		)
	}
}

export default AddSermonTime;