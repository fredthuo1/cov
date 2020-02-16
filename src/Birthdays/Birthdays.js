import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';


class Birthdays extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			people: []
		};
	}

	componentDidMount() {
		axios.get( 'http://localhost:8080/contacts' )
		.then( res => {
			this.setState({ people: res.data })
		})
	}

	render() {
	
		return (
			<div className="peopleList">
				<div className="buttons">
				<Link to="/App"><Button onClick={ this.handleClick }>Add User</Button></Link>
				</div>
				<Table hover bordered striped responsive size="lg">
                  <thead>
                  <tr>
					 <th>ID</th>
					 <th>First Name</th>
					 <th>Last Name</th>
					 <th>Birthdays</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.people.map( person =>
						<tr>
						  <td><Button onClick={ this.renderProfile } ><Link to={{ pathname: '/Profile' }} >{ person.id }</Link></Button></td>
						  <td>{ person.firstName }</td>
						  <td>{ person.lastName }</td>
						  <td>{ person.birthDate }</td>
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
		)
	}
}

export default Birthdays;