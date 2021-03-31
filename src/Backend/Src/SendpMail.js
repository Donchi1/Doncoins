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

const APP_NAME = 'Doncoins'

router.get('/p', (req, res) => {
  const mailOptions = {
    from: `${APP_NAME} <noreply@donocoins.info`,
    to: 'cdclem57@gmail.com',
    subject: 'payments review',
    html: `
        <h1>Reveiw </h1>
        <p> Sorry your payment prove is under reveiw by our team, wait for less than 24 hour</p>
      `,
  }
  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log('error occured')
    } else {
      res.send({
        statusCode: 200,
        body: JSON.stringify({ result: 'success' }),
      })
    }
  })
})

module.exports = router
