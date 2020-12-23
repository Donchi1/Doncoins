//const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

//const gmailEmail = functions.config().gmail.email
//const gmailPassword = functions.config.gmail.password

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: true,
  auth: {
    user: 'contacts@cryptogenus.org',
    pass: 'a1eM bbpu qKGn',
  },
})

const APP_NAME = 'Cryptogenus'

exports.handler = function (event, context, callback) {
  console.log(context)

  const mailOptions = {
    from: `${APP_NAME} <noreply@cryptogenus.org`,
    to: 'cdclem57@gmail.com',
    subject: 'payments review',
    html: `
      <h1>Reveiw </h1>
      <p> Sorry your payment prove is under reveiw by our team, wait for less than 24 hour</p>
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
