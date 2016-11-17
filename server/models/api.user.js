'use strict'

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

let UsersSchema = new Schema ({
  "username" : String,
  "password" : String,
  "email"  : String
},{
  "timestamps" : true
})

UsersSchema.plugin(passportLocalMongoose)

moduel.exports = mongoose.model('Users', UsersSchema)
