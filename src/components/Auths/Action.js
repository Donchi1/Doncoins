export const registerAction = (data, firebase, dispatch) => {
  const email = data.email
  const password = data.password

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.user.uid)
        .set({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          gender: data.gender,
          age: data.date,
          country: data.country,
          state: data.state,
          uid: user.user.uid,
          initial: data.firstname[0] + data.lastname[0],
          totalBalance: '0000',
          initialDeposite: '0000',
          bonus: '20.00',
        })
      return firebase.auth().currentUser.sendEmailVerification()
    })
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .catch((err) => dispatch({ type: 'SIGNUP_ERROR', error: err }))
}

export const logginAction = (data, firebase, dispatch) => {
  const email = data.email
  const password = data.password
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
    .catch((err) => dispatch({ type: 'LOGIN_ERROR', error: err }))
}

export const forgetAction = (dispatch, firebase) => {
  const currentUser = firebase.auth().currentUser
  if (currentUser === null) return

  firebase
    .auth()
    .sendPasswordResetEmail(currentUser)
    .then(() => dispatch({ type: 'PASSRESET_SUCCESS' }))
    .catch((err) => dispatch({ type: 'PASSRESET_ERROR', error: err }))
}

export const updateProfileAction = (profile, firebase) => {
  const uid = firebase.auth().currentUser.uid

  if (profile.firstname || profile.lastname) {
    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .set({ firstname: profile.firstname, lastname: profile.lastname })
  }
  if (profile.password) {
    firebase.auth().currentUser.updatePassword(profile.password)
  }
  if (profile.email) {
    firebase.auth().currentUser.updateEmail(profile.email)
  }
}

export const withdrawalAction = (amount, address, dispatch, firebase) => {
  const uid = firebase.auth().currentUser.uid

  const firestore = firebase.firestore()
  firestore
    .collection('withdrawals')
    .doc(uid)
    .set({ withdrawalAmount: amount, wallet: address })
    .then(() => dispatch({ type: 'WITHDRAWAL_ERROR' }))
    .catch(() => dispatch({ type: 'WITHDRAWAL_ERROR' }))
}

export const paymentAction = (amount, file, firebase, dispatch) => {
  const uid = firebase.auth().currentUser.uid
  const firestore = firebase.firestore()
  firestore
    .collection('payments')
    .doc(uid)
    .set({ paymentAmount: amount, Provefile: file, TradeableBalace: '0000' })
    .then(() => dispatch({ type: 'PAYMENT_SUCCESS' }))
    .catch(() => dispatch({ type: 'PAYMENT_ERROR' }))
}

export const LogoutAction = (firebase, dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'LOGOUT' })
    })
}

export const newsLetterAction = (email, firebase, dispatch) => {
  firebase
    .firestore()
    .collection('users')
    .add({
      newsLetter: email,
    })
    .then(() => dispatch({ type: 'SUBCRIPTION_SUCCESSFUL' }))
    .catch(() => dispatch({ type: 'SUBCRIPTION_ERROR' }))
}

//const googleSignimAction = () => {
//  const provider = new firebase.auth().GoogleAuthProvider()
//}
