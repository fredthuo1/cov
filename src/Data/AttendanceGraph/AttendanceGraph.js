import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './AttendanceGraph.css';
 
class AttendanceGraph extends Component {

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
		    <a href="/IncomeGraph"> Income </a>
			<a href="/ExpendituresGraph"> Expenditure </a>
			<a href="/FinanceGraph"> Finance </a>
	        <a href="/AttendanceGraph"> Attendance </a>
	        <a href="/EventsGraph"> Events </a>
		</div>
        <Line
          data={this.state.datasets}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
  }

}

export default AttendanceGraph;

