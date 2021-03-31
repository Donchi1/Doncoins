const nodemailer = require('nodemailer')
const router = require('express').Router()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: process.env.REACT_APP_EMAIL || 'lionchi61@gmail.com',
    pass: process.env.REACT_APP_PASS || 'Donchi12345##@@',
  },
})
const APP_NAME = 'Doncoins'

router.post('/', (req, res) => {
  mailOptions = {
    from: `${APP_NAME} <noreply@donocoins.info`,
    to: 'cdclem57@gmail.com',
    subject: 'payments review',
    html: `
        <h1>Contact </h1>
        <p>Thank you for contacting doncoins</p>
        <p>Our team are currrently busy, we will get back to you as soon as posible.</p>
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
})

module.exports = router
