import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import firebase from './database/firebasedb'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import BeforeComponents from './components/Auths/BeforeComponents'

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/CSS/App.css'

import App from './App'
import createAdminStore, { store } from './database/createAdminStore'
import {
  dataProvider,
  history,
  authProvider,
} from '../src/components/navigation/AdminPage'

ReactDOM.render(
  <Provider store={createAdminStore(authProvider, dataProvider, history)}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      createFirestoreInstance={createFirestoreInstance}
      dispatch={store.dispatch}
      config={{
        useFirestoreForProfile: 'true',
        userProfile: 'users',
        attachAuthIsReady: 'true',
      }}
    >
      <BeforeComponents>
        <App />
      </BeforeComponents>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
