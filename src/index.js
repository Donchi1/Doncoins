import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import firebase from './database/firebasedb'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import './components/CSS/App.css'

import App from './App'
import createAdminStore, { store } from './database/createAdminStore'
import { dataProvider, history } from '../src/components/navigation/AdminPage'
import authProvider from './components/navigation/authProvider'

ReactDOM.render(
  <Provider store={createAdminStore(authProvider, dataProvider, history)}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      createFirestoreInstance={createFirestoreInstance}
      dispatch={store.dispatch}
      config={{
        useFirestoreForProfile: true,
        userProfile: 'users',
        attachAuthIsReady: true,
      }}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
