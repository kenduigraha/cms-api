'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

let DatasSchema = new Schema ({
  letter : String,
  frequency : String
},{
  timestamps : true
})


module.exports = mongoose.model('Datas', DatasSchema)
