const router = require('./SendwMail')
const nodemailer = require('nodemailer')

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
        <h1>Welcome to doncoins </h1>
        <p>Thank you for been a member of doncoins.</p>
        <p>You have finally joined millions of investors into making great wealth</p>
        <p>We wish you success as you invest and trade with ease with doncoins</p>
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
