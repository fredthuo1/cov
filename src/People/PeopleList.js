import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Profile from '../Profile/Profile';
import "./PeopleList.css";
import { Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';


class PeopleList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			people: [],
			person: '',
			id:'',
			groups:[],
			addresses:[]
		};
		this.handleClick = this.handleClick.bind(this);
		this.viewProfile = this.viewProfile.bind(this);
		this.renderProfile = this.renderProfile.bind(this);
	}
	
	componentDidMount() {
		axios.get( 'http://localhost:8080/contacts' )
		.then( res => {
			this.setState({ people: res.data })
			this.setState({ addresses: res.data.addresses })
		});
	}


	handleClick() {
		history.goBack()
	}

	viewProfile=()=> {
		person: this.state.person
	}

	renderProfile() {
		return <Profile value={ this.person.id }/>
		}

	render() {
		const id = { id:this.state.id };

		return (
			<div className="peopleList">
				<div className="buttons">
				<Link to="/AddPerson"><Button onClick={ this.handleClick }>Add Person</Button></Link>
				</div>
				<Table className="table" hover bordered striped responsive size="lg">
                  <thead>
                  <tr>
					 <th>ID</th>
					 <th>First Name</th>
					 <th>Last Name</th>
					 <th>Member Type</th>
					 <th>Address</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.people.map( person =>
						<tr>
						  <td><Link to={{ pathname: '/Profile',
							state: {
							id: person.id
							}
						  }} >{ person.id }</Link></td>
						  <td>{ person.firstName }</td>
						  <td>{ person.lastName }</td>
						  <td>{ person.memberType }</td>
						</tr>
					)}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
			</div>
		);
	}

}

export default PeopleList;