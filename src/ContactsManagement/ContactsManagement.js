import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactsManagement.css';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap'; 


class ContactsManagement extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment >
				<div className="mainBody">
				<div class="sidebar">
					<a href="/PeopleList"> People List </a>
					<a href="/AddPerson"> Add Member </a>
					<a href="/Birthdays"> Birthdays </a>
					<a href="/MemberAnalysis"> Member Analysis </a>
					<a href="/Mail"> Mail </a>
				</div>
				<Row >
					  <Col >
						<Card className="text-white bg-info">
						  <CardBody className="pb-0">
						    <Link className="link" to="/PeopleList"><i class="cil-address-book" style={{ fontSize: 175 + 'px' }} ></i></Link>
						  </CardBody>
						  <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
						  </div>
						</Card>
					  </Col>

					  <Col >
						<Card className="text-white bg-primary">
						  <CardBody className="pb-0">
						    <Link className="link" to="/Birthdays"><i class="cil-spreadsheet" style={{ fontSize: 175 + 'px' }} ></i></Link>
						  </CardBody>
						  <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
						  </div>
						</Card>
					  </Col>
					  </Row>
					  <Row>
					  <Col >
						<Card className="text-white bg-warning">
						  <CardBody className="pb-0">
						    <Link className="link" to="/MemberAnalysis"><i class="cil-contact" style={{ fontSize: 175 + 'px' }} ></i></Link>
						  </CardBody>
						  <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
						  </div>
						</Card>
					  </Col>

					  <Col >
						<Card className="text-white bg-danger">
						  <CardBody className="pb-0">
						    <button className="button"><i class="cil-envelope-letter" style={{ fontSize: 175 + 'px' }} ></i></button>
						  </CardBody>
						  <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
						  </div>
						</Card>
					  </Col>
					</Row>
			</div >
			</React.Fragment>
		)
	}
}

export default ContactsManagement;