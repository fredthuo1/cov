import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class MemberTypes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			memberTypes: []
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('')
		.then( res => {
			this.setState({
				memberTypes: res.data
			})
		})
	}

	handleClick() {
		history.goBack()
	}

	render() {
		return(
			<div className="memberTypes">
				<div className="buttons">
				</div>

				<Table hover bordered striped responsive size="lg">
						<thead>
						  <tr>
								<th>Member Id</th>
								<th>Member Type</th>
						  </tr>
						</thead>
					  <tbody>
					  { this.state.memberTypes.map( memberType =>
							<tr>
								<td>{ memberType.Id }</td>
								<td>{ memberType.memberDescription }</td>
							</tr>
						)}
					  </tbody>
				</Table>
			</div>
		)
	}

}

export default MemberTypes;