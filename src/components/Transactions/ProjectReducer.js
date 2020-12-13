const initialAuth = {
  paymentError: null,
  paymentSuccess: '',
  withdrawalError: null,

  subcriptionSuccess: '',
  subcriptionError: null,
}

export const projectReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'PAYMENT_SUCCESS':
      return {
        ...state,

        paymentSuccess: 'successful payment',
      }
    case 'PAYMENT_ERROR':
      return {
        ...state,

        paymentSuccess: 'unsuccessful payment',
      }

    case 'WITHDRAWAL_ERROR':
      return {
        ...state,
        withdrawalError:
          'unsuccessful withdrawal check your data or contact account manager',
      }
    case 'SUBCRIPTION_SUCCESS':
      return {
        ...state,

        subcriptionSucces:
          'subcription successfull. You will be updated anytime there is a news',
      }
    case 'SUBCRIPTION_ERROR':
      return {
        ...state,

        subcriptionError: 'Subcription unsuccessful',
      }

    default:
      return state
  }
}
