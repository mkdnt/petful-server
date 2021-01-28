'use strict';

const express = require('express');

const { CatService, DogService } = require('./pets-service');
const router = express.Router();

router
  .route('/api/cat')
  .get((req, res, next) => {
    const cats = CatService.getCats();
    if (!cats) {
      return res.status(400).json({
        error: 'Sorry, no cats currently available.',
      });
    }
    return res.json(cats);
  })
  .delete((req, res, next) => {
    const cats = CatService.adoptCat();
    if (!cats) {
      return res.status(400).json({
        error: 'Sorry, no cats currently available.',
      });
    }
    res.status(200).send(cats);
  });

router
  .route('/api/dog')
  .get((req, res) => {
    const dogs = DogService.getDogs();
    if (!dogs) {
      return res.status(400).json({
        error: 'Sorry, no dogs currently available.',
      });
    }
    return res.json(dogs);
  })
  .delete((req, res, next) => {
    const dogs = DogService.adoptDog();
    if (!dogs) {
      return res.status(400).json({
        error: 'Sorry, no dogs currently available.',
      });
    }
    return res.status(200).send(dogs);
  });

module.exports = router;