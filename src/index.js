const express = require('express')
const path = require('path')
const hbs = require('hbs')
const session = require('express-session')
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

// helper to check equality in handlebars templates
hbs.registerHelper('eq', function(a, b) {
    return a === b;
})

// serve static files
app.use(express.static(staticpath)) 

// Initialize session
app.use(
    session({
        secret: 'yourSecretKey',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
)

app.use((req, res, next) => {
    res.locals.currentPath = req.path  // For active link highlighting
    res.locals.user = req.session.user || null  // Regular user login
    res.locals.vehicleUser = req.session.vehicleUser || null  // Vehicle user login
    next();
})

// Middleware to parse incoming form data and JSON
app.use(express.urlencoded({extended:true})) // -middleware (it should be placed before routes)
app.use(express.json())

// Routes
app.use(userRouter)
app.use(vehicleRouter)

app.listen(port , () => {
    console.log(`Run it on http://localhost:${port}`)
})





