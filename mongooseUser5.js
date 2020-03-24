"use strict";
/*
 * include more sophisticated mongodb functionality
 * mongoose enforces schemas, mongodb doesn't
 */
const mongoose = require("mongoose");
const User0 = require("./User.js");
let foo = process.argv[2] || "foo";
let bar = Number(process.argv[3]) || 6000;
/*
 * connect to mongodb server
 */
const dbname = "testUser0";
const constr = `mongodb://localhost:27017/${dbname}`;
const conparam = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};
mongoose.connect(constr, conparam);
const db = mongoose.connection;
db.once("open", function() {
    console.log("Connected to server by mongoose")
});


/*
 * create concrete object
 */
let user0 = new User0({
    name: foo,
    email: `${foo}@iba.dk`,
    zipcode: bar
});


/*
 * insert user0 object into database, the C of CRUD
 * save is a mongoose method
 */
user0.save(function(error, savedDocument) {
    if (error) console.log("primary:\n" + error);
    db.close();
});



console.log("Asynchronous? If I come first, yes!");