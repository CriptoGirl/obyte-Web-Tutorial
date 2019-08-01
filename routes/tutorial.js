// obyte Integration Tutorial

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('tutorial', { title: 'Tutorial page' });
});

module.exports = router;
