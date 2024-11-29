const express = require('express')
const UserSign = require('../models/userSignup')
const Vehicle = require('../models/vehicleRegister')
const moment = require('moment') // to change date format
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if both email and password are provided
        if (!email || !password) {
            // return res.status(400).redirect('/login?error=Please enter both phone and password')
            return res.status(400).render('login', {
                error: 'Please enter both email and password',
            })
        }

        // Validate credentials
        const user = await UserSign.findByCredentials(email, password)

        if (!user) {
            return res.status(400).redirect('/login?error=invalid login credentials')
        }

        // Successful login, redirect to home
        req.session.user = { name: user.fname, email: user.email }  
        res.status(200).redirect('/')
    } catch (e) {
        // console.error(e)
        res.status(500).redirect('/login?error=Something went wrong. Please try again.')
    }
})

router.post('/signup', async (req,res) => {
    
    try {
        const { fname, email, phone, password } = req.body
        
        if (!fname || !phone || !email || !password) {
            return res.status(400).render('signup', { 
                error: 'All fields are required.'
            })
        }
        
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).render('signup', {
                error: 'Phone number must be exactly 10 digits.'
            })
        }
        
        user = new UserSign({ fname, email, phone, password });
        await user.save()
        req.session.user = { name: user.fname, phone: user.phone }
        res.status(201).redirect('/')
        
    } catch (e) {
        res.status(400).send(e)
    } 
})

router.post('/resetPw', async (req, res) => {
    try {
        const { phone, newPassword, confirmPassword } = req.body

        // Validate input
        if (!phone || !newPassword || !confirmPassword) {
            return res.status(400).render('resetPw', {
                error: 'All fields are required.'
            })
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).render('vlogin', {
                error: 'Phone number must be exactly 10 digits.'
            })
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).render('resetPw', {
                error: 'New Password and Confirm Password do not match.'
            })
        }

        // Find user by phone number
        const user = await UserSign.findOne({ phone })
        if (!user) {
            return res.status(404).render('resetPw', {
                error: 'Phone number not found in database.'
            })
        }

        // Update password
        user.password = newPassword
        await user.save()

        res.render('resetPw', {
            success: 'Password has been reset successfully.'
        })
    } catch (e) {
        // console.error(e);
        res.status(500).render('resetPw', {
            error: 'An error occurred. Please try again later.'
        })
    }
})

router.get('/', async (req,res) => {
    const vehicles = await Vehicle.find({}).sort({ date: 1})
    const formattedVehicles = vehicles.map(vehicle => ({
        ...vehicle._doc,
        date: moment(vehicle.date).format('DD-MM-YYYY') // Format the date
    }))
    res.render('index', {currentPath: '/', user: req.session.user, vehicles: formattedVehicles})
})

router.get('/detail/:id', async (req,res) => {
    try{
        const vehicle = await Vehicle.findById(req.params.id)
        if(!vehicle){
            return res.status(404).send('Vehicle not found')
        }
        
        res.render('detail', { vehicle })
    } catch (e){
        res.status(500).send(e)
    }
})

router.get('/login', (req, res) => {
    const { error } = req.query
    res.render('login', { error, currentPath: '/login'})
})

router.get('/signup', (req,res) => {
    res.render('signup', {currentPath: '/login'})
})

router.get('/resetPw', (req, res) => {
    res.render('resetPw', { currentPath: '/login' });
})

router.get('/vlogin', async (req,res) => {
    // const { error } = req.query
    // res.render('vlogin', { currentPath: '/vlogin', user: req.session.user })
    res.render('vlogin', {currentPath: '/vlogin'})
})

router.get('/vehicle', (req,res) => {
    // res.render('vehicle', {currentPath: '/vlogin', user: req.session.user })
    res.render('vehicle', {currentPath: '/vlogin'})

})

router.get('/vreset', (req,res) => {
    res.render('vreset', {currentPath: '/vlogin'})
})

router.get('/addVehicle', (req,res) => {
    res.render('addVehicle')
})
  

router.get('/about', (req,res) => {
    // res.render('about', {currentPath: '/about', user: req.session.user})
    res.render('about', {currentPath: '/about'})

})

router.get('/logout', (req,res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

router.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        errormsg: 'Page not found'
    })
})

module.exports = router

