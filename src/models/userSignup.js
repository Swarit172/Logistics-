const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        // required: true,
        trim: true,
        lowercase: true
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error('Email is invalid')
        //     }
        // }
    },
    phone: {
        type: Number,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true,
        minlength: 7,
        trim: true
        // validate(value){
        //     if(value.toLowerCase().include('password')){
        //         throw new Error('Password cannot contain number')
        //     }
        // }
    }
}, {
    timestamps: true
})




const UserSign = mongoose.model('UserSign', userSchema)

module.exports = UserSign