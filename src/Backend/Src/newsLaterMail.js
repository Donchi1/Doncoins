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
  //let data = JSON.parse(req.body)

  const mailOptions = {
    from: `${APP_NAME} <noreply@cryptogenus.org`,
    to: 'cdclem@gmail.com',
    subject: 'Newsletter',
    html: `<p>Thanks subscribing to our newsletter you will be updated anytime there is an update</p>
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
