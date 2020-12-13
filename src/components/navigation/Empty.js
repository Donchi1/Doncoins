import React from 'react'
import { useLocation } from 'react-router-dom'
import * as Icons from 'react-bootstrap-icons'

function Empty() {
  const { pathname } = useLocation()
  return (
    <div className="bg-dark" style={{ minHeight: '100vh' }}>
      <div className="text-center ">
        <Icons.EmojiAngry size="4rem" color="red" className="mt-5" />
      </div>
      <div className="text-center text-light mt-2">
        <h1>
          Sorry your request to access
          <span style={{ color: 'red' }}>{pathname}</span> page was not found,
          check url
        </h1>
      </div>
    </div>
  )
}

export default Empty
