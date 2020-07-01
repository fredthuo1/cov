import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import "./Home.css";

class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			address: {
				street: '',
				city: '',
				state:'',
				zipCode:'',
				country:''
			},
			organizationName: '',
			people: [],
			users: [],
			groupEvents:[],
			programs: [],
			finances: [],
			monthlyBills: [],
			donations: [],
			isVisible: false
		};
	}

	updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }
	

	render () {
		return (
			<div class="sidebar">
			  <a href="/IncomeGraph"> Income </a>
			  <a href="/ExpendituresGraph"> Expenditure </a>
			  <a href="/FinanceGraph"> Finance </a>
			  <a href="/AttendanceGraph"> Attendance </a>
			  <a href="/EventsGraph"> Events </a>
			</div>
		)
	}


}

export default Home;