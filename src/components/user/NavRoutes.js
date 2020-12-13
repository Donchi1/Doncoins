import React from 'react'
import UserNav from './UserNav'
import NavBar from '../navigation/NavBar'
import { useLocation } from 'react-router-dom'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function NavRoutes() {
  const { pathname } = useLocation()
  const authState = useSelector((state) => state.firebase.auth)

  return (
    <>
      {(isLoaded(authState) && pathname === '/user') ||
      pathname === '/profile' ? (
        <UserNav />
      ) : (
        <NavBar />
      )}
    </>
  )
}

export default NavRoutes
