'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('placeList', { name: 'James Dean' });
});

router.get('/create', (req, res, next) => {
  res.render('createPlace', { name: 'James Dean' });
});


module.exports = router;
