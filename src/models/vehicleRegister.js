const mongoose = require('mongoose')
const validator = require('validator')

const vehSchema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true,
        unique: true,
        length: 10
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    vehicleNo: {
        type: String,
        required: true,
        unique: true
    },
    vehicleInfo: {
        type: String,
        required: true
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    date: {
        type: Date
    },
    capacity: {
        type: String
    }
}, {
    timestamps: true
})




const Vehicle = mongoose.model('Vehicle', vehSchema)

module.exports = Vehicle

