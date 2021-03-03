import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import Loader from '../navigation/Loader'

function ComponentReady({ children }) {
  const authState = useSelector((state) => state.firebase.auth)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 9000)
  }, [])

  return <>{!isLoaded(authState) || loading ? <Loader /> : children}</>
}

export default ComponentReady
