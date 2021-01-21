const express = require('express');
const cors = require('cors');
const peopleRouter = require('../people/people-router');
const catsRouter = require('../pets/cats-router');
const dogsRouter = require('../pets/dogs-router');
const {CLIENT_ORIGIN} = require('../config')

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/people', require('../people/people-router'))
app.use('/cats', require('../pets/cats-router'))
app.use('/dogs', require('..pets/dogs-router'))

app.get('/', (req, res) => {
  res.send('This is the Petful API!')
})

module.exports = app
