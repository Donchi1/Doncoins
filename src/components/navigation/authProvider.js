//import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin'

//export default (type, params) => {
//  if (type === AUTH_LOGIN) {
//    const cred = { email: params.email, password: params.password }
//    localStorage.setItem('cred', cred)
//    if (
//      cred.email === 'cryptogenus57@gmail.com' &&
//      cred.password === 'chibikecoins'
//    ) {
//      return Promise.resolve()
//    }
//  }
//
//  if (type === AUTH_LOGOUT) {
//    localStorage.removeItem('cred')
//    return Promise.resolve()
//  }
//  if (type === AUTH_ERROR) {
//    const { status } = params
//    if (status === 401 || status === 403) {
//      localStorage.removeItem('cred')
//      return Promise.reject()
//    }
//    return Promise.resolve()
//  }
//
//  if (type === AUTH_CHECK) {
//    return localStorage.getItem('cred') ? Promise.resolve() : Promise.reject()
//  }
//  return Promise.reject('Unknown Method')
//}
