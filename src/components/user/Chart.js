import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'sep'],
    datasets: [
      {
        label: 'transaction',
        data: [65, 40, 57, 57, 58, 80, 95, 40, 68, 34],
        backgroundColor: 'darkblue',
        borderColor: 'white',
        fill: false,
        color: 'white',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(35, 35, 146)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      },
    ],
  }
  let options = {
    display: true,
    text: 'Total transaction History',
    fontSize: 20,
    mainytainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
      backgroundColor: 'white',
    },
  }

  return (
    <div className="w-full max-w-md">
      <Bar options={options} data={data} />
    </div>
  )
}

export default Chart
