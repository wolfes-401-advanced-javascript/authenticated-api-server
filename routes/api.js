'use strict';

/**
 * requires express and the router
 */
const express = require('express');
const router = express.Router();

/**
 * requires the model finder
 */
const modelFinder = require('../middleware/model-finder.js')

/**
 * sets the router parameters to the model finder
 */

router.param('model', modelFinder);

/**
 * defines the methods for the router
 */
router.post('/:model', postNew);
router.get('/:model', getAll);
router.get('/:model/:id', getById);
router.put('/:model/:id', updateById);
router.delete('/:model/:id', deleteById);

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * function definitions and logic
 */

function postNew(req, res) {
  req.model.create(req.body)
    .then(results => res.send('Product saved!' + results))
    .catch(err => res.send(err));
  
}

function getAll(req, res) {
  req.model.read()
    .then(results => res.send(results))
    .catch(err => res.send(err));
}

function getById(req, res) {
  req.model.read(req.params.id)
    .then(results => res.send(results)) 
    .catch(err => res.send(err));
}

function updateById(req, res) {
  req.model.update(req.params.id, req.body)
    .then(res.send(`Updated ${req.params.id}`))
    .catch(err => res.send(err));
}

function deleteById(req, res) {
  req.model.delete(req.params.id)
    .then(res.send(`Product ID: ${req.params.id} has been deleted`))
    .catch(err => res.send(err));
}



module.exports = router;