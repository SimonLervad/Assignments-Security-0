"use strict";

const mongoose = require("mongoose");
/*
 * create schema for user object
 * build corresponding model as an object
 * Wex19, lesson 17
 */
const userSchema = mongoose.Schema({        // with complex attributes
    name: {
        type: String,                       // coercion toString
        required: true                      // must be present AND have value (not null)
    },
    email: {
        type: String,
        required: true,
        lowercase: true,                    // coerces (?) to lower case
        unique: true                        // if not a validator, what?
    },
    zipcode: {
        type: Number,
        min: [1000, "Zip code too short"],  // validator and its error msg
        max: 9999                           // validator, relies on std error msg
    },
    created: {
        type: Date,                         // if value invalid, force to start UNIX era
        default: Date.now                   // default value if none given
    }
});

userSchema.methods.getInfo = function () {
    return `Name: ${this.name}, Email: ${this.email}, Zipcode: ${this.zipcode}`;
}

userSchema.methods.findNeighbours = function () {
    return this.model("User").find({zipcode: this.zipcode}).exec();
}

module.exports = mongoose.model("User", userSchema, 'user');