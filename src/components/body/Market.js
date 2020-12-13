import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Market() {
  const [data, setData] = useState('')

  useEffect(() => {
    Axios.get('https://blockchain.info/ticker')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div>{data.USD.last}</div>
    </>
  )
}

export default Market
