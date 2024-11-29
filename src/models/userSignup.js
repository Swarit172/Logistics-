const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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

// to hash password
userSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8) // 8 - is called salt
    }

    next()
})

// Define the static method on the schema
userSchema.statics.findByCredentials = async function (email, password) {
    const user = await UserSign.findOne({ email })
    if (!user) {
        throw new Error('Email id not found')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid password')
    }
    return user
}

const UserSign = mongoose.model('UserSign', userSchema)

module.exports = UserSign