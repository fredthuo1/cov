import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddOrganization extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return  (
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
				</Form.Row><Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Sermon Description</Form.Label>
						<Form.Control type="text" placeholder="Sermon Description" onChange={ (event) => this.setState({ sermonDescription:event.target.value })} />
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

export default AddOrganization;