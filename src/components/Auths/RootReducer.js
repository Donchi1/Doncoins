import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { authReducer } from './AuthReducer'
import { combineReducers } from 'redux'
import { projectReducer } from '../Transactions/ProjectReducer'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  authReducer,
  projectReducer: projectReducer,
})

export default rootReducer
