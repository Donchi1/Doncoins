import React from 'react'
import ChartistGraph from 'react-chartist'

function MarketChart() {
  const data = {
    label: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Ju',
      'Jl',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -2],
  }

  const options = {
    high: 10,
    low: -10,
    height: '400px',
    width: '400px',
    axisX: {
      labelInterpolationFnc: (value, index) => {
        return index % 2 === 0 ? value : null
      },
    },
  }
  const type = 'Pie'
  return (
    <div>
      <ChartistGraph
        className="ct-octave"
        data={data}
        options={options}
        type={type}
      />
    </div>
  )
}

export default MarketChart
