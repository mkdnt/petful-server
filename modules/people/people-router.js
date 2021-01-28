'use strict';

const express = require('express');
const json = require('body-parser').json();

const PeopleService = require('./people-service');

const router = express.Router();

router
  .route('/api/people')
  .get((req, res, next) => {
    const people = PeopleService.getAllPeople();
    if (!people) {
      return res.status(400).error({
        error: 'The line is empty.',
      });
    }
    return res.json(people);
  })
  .delete((req, res, next) => {
    const people = PeopleService.removeAdopter();
    if (!people) {
      return res.status(400).json({
        error: 'The line is empty.',
      });
    }
    return res.json(people);
  })
  .post(json, (req, res, next) => {
    const { name } = req.body;
    const newName = name;

    if (!name) {
      return res.status(400).json({
        error: 'Name required.',
      });
    }
    res.json(PeopleService.newAdopter(newName));
  });

module.exports = router;