import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

const MobileInput = ({ user, changeUser }) => {
  const onchange = (value) => {
    const valid = isValidPhoneNumber(value)
    if (valid) {
      changeUser({ ...user, phone: value })
    } else {
      changeUser({ ...user, isValidPhone: true })
    }
  }
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={user.phone}
      international
      defaultCountry="RU"
      onChange={onchange}
    />
  )
}

export default MobileInput
