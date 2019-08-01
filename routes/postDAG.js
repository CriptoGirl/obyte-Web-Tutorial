// obyte Integration Tutorial

const express = require('express');
const router = express.Router();

const client = require('../startup/obyte');

router.get('/', (req, res) => {
  //res.send('Post to DAG page');
  res.render('postDAG', { title: 'Post to DAG page' });
});

router.post('/', (req, res) => {
  // preparing transaction data
  const type = req.body.type;
  const wif = req.body.wif;

  if (type === 'bytes') {
    var params = {
      outputs: [ {
        address: req.body.recipient,  // The Obyte address of the recipient
        amount: Number(req.body.amount) } ] };// The amount she/he receives
  }

  if (type === 'data' || type === 'data_feed') {
    var params = req.body;
    delete params.type;
    delete params.wif;
  }

  // posting obyte payment & displaying results
  if (type === 'bytes') {
    client.post.payment(params, wif, function(err, result) {
      res.render('postDAG', { title: 'Data Transaction is Posted to DAG', err, result });
    });
  }

  // posting obyte data & displaying results
  if (type === 'data') {
    client.post.data(params, wif, function(err, result) {
      res.render('postDAG', { title: 'Data is Posted to DAG', err, result });
    });
  }

  // posting obyte data feed & displaying results
  if (type === 'data_feed') {
    client.post.data(params, wif, function(err, result) {
      res.render('postDAG', { title: 'Data Feed is Posted to DAG', err, result });
    });
  }

  // testing post router
  //console.log(req.body);
  //res.send('Posted to DAG');
})

module.exports = router;
