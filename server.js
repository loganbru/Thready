
require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('jsx', require('express-react-views').createEngine({}))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.use(require('./routes'))

require('./config/database')
  .then(() => {
    app.listen(process.env.PORT || 3000)
  })
  .catch(e => console.error(e))