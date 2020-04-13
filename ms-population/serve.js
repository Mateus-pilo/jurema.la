const express = require('express');
const server = express();
const router = express.Router();




const routePopulation = require('./routes-population.js')();

router.use('/population', routePopulation);

server.use(router);

server.listen(5002, () => {
  console.log(`Server running on port 5002`);
  
  // send poupulation json from ms-state
  require('./sendMsPopulation');
})

