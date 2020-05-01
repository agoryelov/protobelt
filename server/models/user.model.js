const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        worth: { type: Number, required: true },
        isAdmin: { type: Boolean, required: true }
    },
    { timestamps: true },
)

User.pre('save', function(next) {
    const user = this

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            res.json({ success: false, msg: err.message })
        } else {
            bcrypt.hash(user.password, salt, function(err, hashed) {
                if (err) {
                    return next(err)
                }
                user.password = hashed
                next()
            })
        }
    })
})

module.exports = mongoose.model('user', User)