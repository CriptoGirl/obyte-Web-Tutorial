// obyte Integration Tutorial

const obyte = require('obyte');

// connect to obyte testnet
const options = { testnet: true };
const client = new obyte.Client('wss://obyte.org/bb-test', options);

// To keep the connection with the WebSocket node alive you need to notify the node that your peer is awake every 10 sec.
setInterval(function() {
  client.api.heartbeat()
}, 10 * 1000);

module.exports = client;
