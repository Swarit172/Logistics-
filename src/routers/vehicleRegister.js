const express = require('express')
const Vehicle = require('../models/vehicleRegister')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/vehicle', async (req,res) => {
    try {
        // Validate incoming data
        const { name, phone, email, password } = req.body;
        if (!name || !phone || !email || !password) {
            return res.status(400).render('vehicle', { 
                error: 'All fields are required.',  
            })
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).render('vehicle', {
                error: 'Phone number must be exactly 10 digits.',
                currentPath: 'vlogin'
            })
        }

        // Save vehicle data
        const vehicleUser = new Vehicle({ name, phone, email, password })
        await vehicleUser.save()
        req.session.vehicleUser = { name: vehicleUser.name, _id: vehicleUser._id }
        res.status(201).redirect('/')
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/vlogin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            // return res.status(400).redirect('/vlogin?error=Please enter both phone and password')
            return res.status(400).render('vlogin', {
                error: 'Please enter both email and password'
            })
        }

        // Validate credentials 
        const vehicleUser = await Vehicle.findByCredentials(email, password)

        if (!vehicleUser) {
            // return res.status(400).redirect('/vlogin?error=Invalid login credentials')
            return res.status(400).render('vlogin', {
                error: 'Invalid login credentials'
            })
        }
        req.session.vehicleUser = { name: vehicleUser.name, _id: vehicleUser._id }
        // Successful login, redirect to home
        res.status(200).redirect('/')
    } catch (e) {
        // Log the error and redirect to the login page with a generic error message
        console.error(e);
        // res.status(500).redirect('/login?error=Something went wrong. Please try again.')
        return res.status(500).render('vlogin', {
            error: 'Something went wrong. Please try again'
        })
    }
})

router.post('/vreset', async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body

        // Check if phone number exists in the database
        const vehicleUser = await Vehicle.findOne({ email })
        if (!vehicleUser) {
            return res.status(400).render('vreset', { 
                error: 'Email id not found.', 
                currentPath: '/vlogin' 
            });
        }

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            return res.status(400).render('vreset', { 
                error: 'Passwords do not match.', 
                currentPath: '/vlogin' 
            });
        }

        // Update the password in the database
        vehicleUser.password = newPassword
        await vehicleUser.save()

        res.status(200).render('vreset', { 
            success: 'Password updated successfully!', 
            currentPath: '/vlogin' 
        });
    } catch (e) {
        console.error(e);
        res.status(500).render('vreset', { 
            error: 'Something went wrong. Please try again.', 
            currentPath: '/vlogin' 
        })
    }
})

router.post('/addVehicle', async (req, res) => {
    if (!req.session.vehicleUser) {
        return res.redirect('/vlogin') //?error=Please log in to add a vehicle');
    }

    const { from, to, date, vehicleNo, vehicleInfo, licenseNo, capacity } = req.body

    try {
        const vehicleUser = await Vehicle.findById(req.session.vehicleUser._id);
        if (!vehicleUser) {
            return res.status(404).render('addVehicle', { error: 'User not found.' });
        }

        vehicleUser.from = from;
        vehicleUser.to = to;
        vehicleUser.date = date;
        vehicleUser.vehicleNo = vehicleNo;
        vehicleUser.vehicleInfo = vehicleInfo;
        vehicleUser.licenseNo = licenseNo;
        vehicleUser.capacity = capacity;

        const today = new Date().toISOString().split('T')[0]; // it send today date as min date to choose

        await vehicleUser.save();
        res.render('addVehicle', {
            success: 'Vehicle added sucessfully',
            currentPath: '/addVehicle',
            todayDate: today
        })
    } catch (error) {
        // console.error(error)
        res.status(500).render('addVehicle')
    }
})

module.exports = router
