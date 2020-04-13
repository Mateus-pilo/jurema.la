const express = require('express');
const server = express();
const router = express.Router();

const worker = require('./worker-population.js')();


const routeState = require('./routes-state.js')();

router.use('/state', routeState);

server.use(router);

server.listen(5001, async () => {
  console.log(`Server running on port 5001`);
  await worker.connect();

})
