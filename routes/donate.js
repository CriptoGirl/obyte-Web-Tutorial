// obyte Integration Tutorial

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('donate', { title: 'Donate page' });
});

module.exports = router;
