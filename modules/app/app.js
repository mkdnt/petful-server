const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('../../config')

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/', require('../people/people-router'));
app.use('/', require('../pets/pets-router'));

app.get('/', (req, res) => {
  res.send('This is the Petful API...')
})

module.exports = app
