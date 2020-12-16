import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './AuthReducer'
import { combineReducers } from 'redux'
import { projectReducer } from '../Transactions/ProjectReducer'
import { adminReducer } from 'react-admin'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer,
  projectReducer: projectReducer,
  admin: adminReducer,
  router: routerReducer,
})

export default rootReducer
