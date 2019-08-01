// obyte Integration Tutorial

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('Search DAG page');
  res.render('searchDAG', { title: 'Search DAG page' });
});

module.exports = router;
