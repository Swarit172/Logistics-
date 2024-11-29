const mongoose = require('mongoose')
const validator = require('validator')
const UserSign = require('../models/userSignup')
const bcrypt = require('bcryptjs')

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
        unique: true
    },
    vehicleInfo: {
        type: String,
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    licenseNo: {
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

vehSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// Define the static method on the schema
vehSchema.statics.findByCredentials = async function (email, password) {
    const user = await Vehicle.findOne({ email });
    if (!user) {
        throw new Error('Email id not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Password does not match');
    }
    return user;
};


const Vehicle = mongoose.model('Vehicle', vehSchema)

module.exports = Vehicle

