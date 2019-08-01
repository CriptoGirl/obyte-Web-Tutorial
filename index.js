// obyte Integration Tutorial

const app = require('./startup/app');

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
