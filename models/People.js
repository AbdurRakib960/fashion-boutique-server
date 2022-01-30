const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        img: {
            type: String,
        }
    },
    {timestamps: true}
);

const People = mongoose.model("People", PeopleSchema);

module.exports = People;