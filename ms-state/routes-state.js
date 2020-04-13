/**
 * Module reponsible contain all handler for state routes
 */
module.exports = () => {

  const express = require('express');
  const router = express.Router();
  const controllerState = require('./controller-state.js')();
  
  /**
   * @author Mateus Piló Dias
   * @param {Object} req Request
   * @param {*} res Response
   * @param {*} next next
   * @return Array of existing states
   */
  const getAll = async(req, res, next) => {
    try {
      const result = await controllerState.get();
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
   * @return Return the state that matchs with passed UF
   */
  const getByState = async(req, res, next) => {
    try {
      const result = await controllerState.get(req.params);
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


