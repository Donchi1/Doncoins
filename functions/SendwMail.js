//const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

//const gmailEmail = functions.config().gmail.email
//const gmailPassword = functions.config.gmail.password

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'donchiclem@gmail.com',
    pass: 'Evangelist##@@',
  },
})

const APP_NAME = 'Cryptogenus'

//exports.handler = function(event, context, callback) {
//  let data = JSON.parse(event.body)
//
//    const mailOptions = {
//      from: `${APP_NAME} <noreply@cryptogenus.org`,
//      to: data.email,
//      subject: 'Newsletter',
//      html: `<p>Thanks subscribing to our newsletter you will be updated anytime there is an update</p>
//    `
//    }
//
//    return transporter.sendMail(mailOptions, (error, data) => {
//      if (error) {
//      callback(error)
//      }else{
//       callback(null, {statusCode : 200, body: JSON.stringify({"result": "success"})})
//      }
//
//    })
//  }
//
exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body)

  const mailOptions = {
    from: `${APP_NAME} <noreply@cryptogenus.org`,
    to: data.email,
    subject: 'Withdrawal',
    html: `<p> Sorry ${data.firstname} 
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
