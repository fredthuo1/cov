import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MemberAnalysis extends Component {

	constructor(props) {
		super(props);
		this.state = {
			peopleList: [],
			value: '',
			memberType: ''
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);	
	}


    handleSubmit(event) {
		 event.preventDefault();
         alert('Role: ' + this.state.memberType);
		 this.setState({ memberType: this.state.value });
	     event.preventDefault();
		 
		
		axios.get( 'http://localhost:8080/memberAnalysis', {
			params: {
			type: this.state.memberType
		}
		} )
		.then( res => {
			this.setState({ peopleList: res.data })
		})
		event.preventDefault();
	}

	render() {
	
		return (
			<div className="peopleList">

				<form onSubmit={this.handleSubmit}>
					<label>
					  Pick Member Role:
					  <select  onChange={(event) => this.setState({ memberType:event.target.value })} >
					    <option >Select Type</option>
						<option value="Pastor">Pastor</option>
						<option value="Member">Member</option>
						<option value="Employee">Employee</option>
					  </select>
					</label>
					<input type="submit" value="Submit" />
				  </form>

				<div className="buttons">
				<Link to="/App"><Button onClick={ this.handleClick }>Add User</Button></Link>
				</div>
				<Table hover bordered striped responsive size="lg">
                  <thead>
                  <tr>
					 <th>ID</th>
					 <th>First Name</th>
					 <th>Last Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.peopleList.map( person =>
						<tr>
						  <td><Button onClick={ this.renderProfile } ><Link to={{ pathname: '/Profile' }} >{ person.id }</Link></Button></td>
						  <td>{ person.firstName }</td>
						  <td>{ person.lastName }</td>
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

export default MemberAnalysis;