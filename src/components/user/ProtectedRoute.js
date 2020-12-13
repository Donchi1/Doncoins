import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

function ProtectedRoute({ children, ...remainingProps }) {
  const authState = useSelector((state) => state.firebase.auth)

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(authState) && !isEmpty(authState) ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  )
}

export default ProtectedRoute
