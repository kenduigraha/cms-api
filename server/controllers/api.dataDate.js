'use strict'

const DataDate = require('../models/api.dataDate')
const seeder = require('../seeder/api.dataDate.json')

let newDataDate = (req, res) => {
  DataDate.create({
    date: req.body.date,
    frequency: req.body.frequency
  }, (err, new_data) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(new_data)
    }
  })
}

let showAllDataDate = (req, res) => {
  DataDate.find({}, (err, all_data) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(all_data)
    }
  })
}

let editDataDate = (req, res) => {
  DataDate.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, updated_data) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(updated_data)
    }
  })
}

let deleteDataDate = (req, res) => {
  DataDate.findOneAndRemove({
    _id: req.params.id
  }, (err, deleted_data) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(deleted_data)
    }
  }
}

let seedDataDate = (req, res) => {
  DataDate.create(seeder, (err, seeder_data) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(seeder_data)
    }
  })
}

let deleteAllDataDate = (req, res) => {
  DataDate.remove({}, (err, remove_all) => {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(remove_all)
    }
  })
}

module.exports = {
  newDataDate,
  showAllDataDate,
  editDataDate,
  deleteDataDate,
  seedDataDate,
  deleteAllDataDate
}
