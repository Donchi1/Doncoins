const initialAuth = {
  loginError: null,
  loginSuccess: '',
  logout: null,
  signupSuccess: '',
  signupError: null,
  passResetSuccss: '',
  passError: null,
}

export const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginSuccess: 'login Success',
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: action.error.message,
      }
    case 'LOGOUT':
      return {
        ...state,
        logout: 'logout Success',
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signupSuccess: 'Signup Success',
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        signupError: action.error.message,
      }
    case 'PASSRESET_SUCCESS':
      return {
        ...state,
        passResetSuccss: 'A password reset email has been sent to you',
      }
    case 'PASSRESET_ERROR':
      return {
        ...state,
        passError: action.error.message,
      }

    default:
      return state
  }
}
