import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const cred = { username: params.username, password: params.password }
    localStorage.setItem('cred', cred)
    if (
      cred.username === process.env.REACT_APP_ADMIN_USERNAME &&
      cred.password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('cred')
    return Promise.resolve()
  }
  if (type === AUTH_ERROR) {
    const { status } = params
    if (status === 401 || status === 403) {
      localStorage.removeItem('cred')
      return Promise.reject()
    }
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    const data = localStorage.getItem('cred')

    if (data) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  }
  return Promise.reject('Unknown Method')
}
