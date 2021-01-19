const express = require('express')
const json = require('body-parser').json()

const Dogs = require('./dogs.service')
const Cats = require('./cats.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
})

router.get('/api/cat', (req, res) => {
  res.json({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
})
})

router.get('/api/dog', (req, res) => {
  res.json({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
})
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
