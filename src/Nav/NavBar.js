import React, { Component } from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router, router, Link  } from "react-router-dom";
import { Form, Col, Button, Navbar, Nav, FormControl } from 'react-bootstrap';
import { AppSidebarNav2 as AppSidebarNav } from '@coreui/react';
import navigation from '../_navs';
import axios from "axios";
import './NavBar.css';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
		
		};
	}

	render() {
		return (
			<Navbar className="nav" >
				<AppSidebarNav navConfig={navigation} {...this.props} router={router} />	  
			</Navbar>
		)
	}

}

export default NavBar;