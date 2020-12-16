import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/navigation/Home'
import Login from './components/Auths/Login'
import SignUp from './components/Auths/SignUp'
import Pricing from './components/navigation/Pricing'
import contacts from './components/navigation/contacts'

import About from './components/navigation/About'
import './components/CSS/App.css'
import Terms from './components/navigation/Terms'
import AdminPage from './components/navigation/AdminPage'
import Empty from './components/navigation/Empty'
import User from './components/user/User'
import ProtectedRoute from './components/user/ProtectedRoute'
import Profile from './components/user/Profile'
import NavRoutes from './components/user/NavRoutes'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function App() {
  const authState = useSelector((state) => state.firebase.auth)
  return (
    <Router>
      <NavRoutes />
      <Switch>
        <Route exact path="/" component={Home} />

        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route
          path="/user"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <User />
            }
          }}
        />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contacts" component={contacts} />
        <Route exact path="/about" component={About} />

        <Route exact path="/terms" component={Terms} />
        <Route exact path="/admin" component={AdminPage} />
        <Route component={Empty} />
      </Switch>
    </Router>
  )
}

export default App
