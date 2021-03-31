//const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const router = require('express').Router()

//const gmailEmail = functions.config().gmail.email
//const gmailPassword = functions.config.gmail.password

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: process.env.REACT_APP_EMAIL || 'lionchi61@gmail.com',
    pass: process.env.REACT_APP_PASS || 'Donchi12345##@@',
  },
})

const APP_NAME = 'Cryptogenus'

exports.handler = function (event, context, callback) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@doncoins.info`,
    to: 'cdlem@gmail.com',
    subject: 'Withdrawal',
    html: `<p> Sorry  
      you cannot complete your withdrawal at this moment contact customer service</p>
    `,
  }

  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      callback(error)
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ result: 'success' }),
      })
    }
  })
}

module.exports = router
