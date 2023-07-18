const session = require('express-session')
const MongoStore = require('connect-mongo')

const sess = require('express-session')({
  secret: 'n1LdaTi3qCRD53bQTQu3l2VHYopJ5tZ283EhvbVf',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  resave: true,
  saveUninitialized: true
})

module.exports = sess