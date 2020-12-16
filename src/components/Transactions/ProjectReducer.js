const initialAuth = {
  paymentError: null,
  paymentSuccess: '',
  withdrawalError: null,

  subcriptionSuccess: '',
  subcriptionError: null,
  uploadSuccess: '',
  uploadError: null,
}

export const projectReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'PAYMENT_SUCCESS':
      return {
        ...state,

        paymentSuccess:
          'Wait for less than 2hours while we review your payment prove',
      }

    case 'WITHDRAWAL_ERROR':
      return {
        ...state,
        withdrawalError:
          'unsuccessful withdrawal check your data or contact customer service ',
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
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        uploadSuccess: 'upload Successful',
      }
    case 'UPLOAD_ERROR':
      return {
        ...state,
        uploadError: 'upload Could not be completed',
      }

    default:
      return state
  }
}
