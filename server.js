require('dotenv').config({path: 'config.env'})
const express = require('express')
const cors = require('cors')
// const routes = require('./route.js')
const mongoConnect = require('./connect')
const contactRoute = require('./routes/contactRoute.js')
const competenceRoute = require('./routes/competenceRoute')
const langueRoute = require('./routes/langue.js')

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('', contactRoute)
app.use('', competenceRoute)
app.use('', langueRoute)
// app.use('/', routes)
mongoConnect()
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})

