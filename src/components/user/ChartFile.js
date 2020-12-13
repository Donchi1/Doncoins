import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Card } from 'react-bootstrap'

function ChartFile() {
  const data = [
    { name: 'Jan', uv: 3000, pv: 1346, amt: 2210 },
    { name: 'Feb', uv: 2600, pv: 1446, amt: 2310 },
    { name: 'March', uv: 5770, pv: 1546, amt: 2410 },
    { name: 'April', uv: 6900, pv: 1646, amt: 2510 },
    { name: 'May', uv: 5800, pv: 1746, amt: 2610 },
    { name: 'June', uv: 8600, pv: 1846, amt: 2710 },
    { name: 'July', uv: 6000, pv: 1946, amt: 2810 },
    { name: 'Aug', uv: 10000, pv: 10346, amt: 2910 },
  ]
  return (
    <Card style={{ minWidth: '100%' }} className=" bg-dark container-fluid ">
      <AreaChart
        width={1500}
        height={500}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="0" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          fillOpacity={1}
          fill="url(#colorUv)"
          color="white"
        />
        <Area
          type="monotone"
          dataKey="pv"
          color="white"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </Card>
  )
}

export default ChartFile
