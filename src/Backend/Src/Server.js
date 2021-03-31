const express = require('express')

const cors = require('cors')
require('dotenv').config()

const welcomeMail = require('./WelcomeMail')
const withdrawalMail = require('./SendwMail')
const newsMail = require('./newsLaterMail')
const contactMail = require('./ContactMail')
const paymentMail = require('./SendpMail')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/payMail', paymentMail)
app.use('/withdrawMail', withdrawalMail)
app.use('/newsMail', newsMail)
app.use('/contactMail', contactMail)
app.use('/welcomeMail', welcomeMail)

app.listen(port, () => {
  console.log(`server is running on port ${port} successfully`)
})
