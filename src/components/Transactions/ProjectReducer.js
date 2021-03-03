const initialAuth = {
  paymentError: null,
  paymentSuccess: '',
  withdrawalError: null,
  paymentAmount: '',
  qrCode: false,
  subcriptionSuccess: '',
  subcriptionError: null,
  uploadSuccess: '',
  uploadError: null,
  contactMessageError: null,
  contactMessageSuccess: '',
}

export const projectReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'PAYMENT_SUCCESS':
      return {
        ...state,

        paymentSuccess:
          'Wait for less than 24hours while we review your payment prove',
      }

    case 'WITHDRAWAL_ERROR':
      return {
        ...state,
        withdrawalError:
          'Unsuccessful withdrawal check your data or contact customer service ',
      }

    case 'SUBCRIPTION_SUCCESS':
      return {
        ...state,
        subcriptionSuccess:
          'Subcription successfull. Thanks for subcribing to our newsletter',
      }
    case 'SUBCRIPTION_ERROR':
      return {
        ...state,
        subcriptionError: action.error.message,
      }
    case 'PAYMENT_SET':
      return {
        ...state,
        paymentAmountData: action.amount,
        qrCode: action.qrcode,
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
    case 'MESSAGE_ERROR':
      return {
        ...state,
        contactMessageError: 'sorry message not sent',
      }
    case 'MESSAGE_SUCCESS':
      return {
        ...state,
        contactMessageSuccess: 'Message was sent successfully',
      }

    default:
      return state
  }
}
