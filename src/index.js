const express = require('express')
const path = require('path')
const hbs = require('hbs')
const userRouter = require('./routers/userSignup')
const vehicleRouter = require('./routers/vehicleRegister')
const port = process.env.PORT || 9090
require('./db/mongoosee')

const app = express()

const staticpath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

app.set('view engine', 'hbs') // template engine - hbs (handlebars)
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticpath)) 

app.use(express.urlencoded({extended:false})) // -middleware (it should be placed before routes)

app.use(express.json())
app.use(userRouter)
app.use(vehicleRouter)


app.listen(port , () => {
    console.log(`Run it on localhost:${port}`)
})





