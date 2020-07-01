import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
 
class Expenditures extends Component {

    constructor(props) {
        super(props);
		this.state = {
			labels: ['January', 'February', 'March',
               'April', 'May'],
            datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
		};
    }

  render () {
    return (
      <div className="Graph" >
        <div class="sidebar">
		    <a href="/Finances"> Finances </a>
			<a href="/Donations"> Donations </a>
			<a href="/Expenditures"> Expenditures </a>
	        <a href="/Pledges"> Pledges </a>
		</div>
      </div>
    )
  }

}

export default Expenditures;