import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class EmployeeCategory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			employeeCategoryList: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				employeeCategoryList: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="employeeCategoryList">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Employee Category Id</th>
								<th>Employee Category Description</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.employeeCategoryList.map( employeeCategory =>
							<tr>
								<td>{ employeeCategory.id }</td>
								<td>{ employeeCategory.categoryDescription }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default EmployeeCategory;