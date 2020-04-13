/**
 * Module reponsible contain all handler for population routes
 */
module.exports = () => {

  const express = require('express');
  const router = express.Router();
  const controllerPopulation = require('./controller-population.js')();
  
  /**
   * @author Mateus Piló Dias
   * @param {Object} req Request
   * @param {*} res Response
   * @param {*} next next
   * @return Array of existing population
   */
  const getAll = async(req, res, next) => {
    try {
      const result = await controllerPopulation.get();
      res.json(result);
    } catch (error) {
      res.status(500).send({
        message: error.message
      });
    }
  };


  /**
   * @author Mateus Piló Dias
   * @param {Object} req Request
   * @param {*} res Response
   * @param {*} next next
   * @return Return the population that matchs with passed UF
   */
  const getByState = async(req, res, next) => {
    try {
      const result = await controllerPopulation.get(req.params);
      res.json(result);
    } catch (error) {
      res.status(500).send({
        message: error
      });
    }
  };


  // TODO: Implements all verbs here for examples: put, post, remove.
  router.get('/', getAll);
  router.get('/:state', getByState);

  

  return router;
}


