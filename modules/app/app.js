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

app.use('/people', peopleRouter)
app.use('/cats', catsRouter)
app.use('/dogs', dogsRouter)


module.exports = app
