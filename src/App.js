import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './components/navigation/Home'
import Login from './components/Auths/Login'
import SignUp from './components/Auths/SignUp'
import Pricing from './components/navigation/Pricing'
import contacts from './components/navigation/contacts'

import About from './components/navigation/About'
import './components/CSS/App.css'

import AdminPage from './components/navigation/AdminPage'
import Empty from './components/navigation/Empty'
import User from './components/user/User'
import Profile from './components/user/Profile'

import { isLoaded, isEmpty } from 'react-redux-firebase'

import ForgetPassword from './components/navigation/ForgetPassword'

import Teams from './components/body/Teams'
import FAQ from './components/body/AskedQuestions'

import Features from './components/body/Features'

import Payments from './components/user/Payments'
import Withdrawals from './components/user/Withdrawals'

import { useSelector } from 'react-redux'
import Invest from './components/user/Invest'

function App() {
  const authState = useSelector((state) => state.firebase.auth)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contacts" component={contacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/passReset" component={ForgetPassword} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/faq" component={FAQ} />

        <Route exact path="/adm" component={AdminPage} />

        <Route
          exact
          path="/user"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <User />
            }
          }}
        />

        <Route
          exact
          path="/profile"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Profile />
            }
          }}
        />
        <Route
          exact
          path="/payments"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Payments />
            }
          }}
        />
        <Route
          exact
          path="/investments"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Invest />
            }
          }}
        />
        <Route
          exact
          path="/withdrawals"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Withdrawals />
            }
          }}
        />
        <Route component={Empty} />
      </Switch>
    </Router>
  )
}

export default App
