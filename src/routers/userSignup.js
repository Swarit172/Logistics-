const express = require('express')
const UserSign = require('../models/userSignup')
const router = new express.Router()

router.post('/signup', async (req,res) => {
    
    try {
        // const user = new UserSign({ fname, email, phone, password });
        const user = new UserSign({
            fname: req.body.fname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })

        await user.save()
        res.status(201).redirect('/')
        
    } catch (e) {
        res.status(400).send(e)
    }
    
})

router.get('/', (req,res) => { 
    res.render('index')
})

router.get('/login', (req,res) => {
    res.render('login')
})

router.get('/signup', (req,res) => {
    res.render('signup')
})

router.get('/detail', (req,res) => {
    res.render('detail')
})

router.get('/vehicle', (req,res) => {
    res.render('vehicle')
})

router.get('/about', (req,res) => {
    res.render('about')
})

router.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        errormsg: 'Page not found'
    })
})

module.exports = router

