'use strict';

const express = require('express');
const router = express.Router();
const bearerMiddleware = require('../middleware/bearer.js');
const permissions = require('../middleware/authorize.js');
const getModel = require('../middleware/models.js');


router.param('model', getModel);

router.post('/:model', bearerMiddleware, permissions('create'), addOne);
router.get('/:model', bearerMiddleware, getAll);
router.get('/:model/:id', bearerMiddleware, getOne);
router.put('/:model/:id', bearerMiddleware, permissions('update'), updateOne);
router.delete('/:model/:id', bearerMiddleware, permissions('delete'), deleteOne);

function addOne(request, response) {
  request.model.create(request.body)
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function getAll(request, response) {
  request.model.get()
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function getOne(request, response) {
  request.model.get(request.params.id)
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function updateOne(request, response) {
  request.model.update(request.params.id, request.body)
    .then(results => response.send(request.params.id + ' was updated'))
    .catch(err => response.send(err));

}

function deleteOne(request, response) {
  request.model.delete(request.params.id)
    .then(results => response.send(request.params.id + ' was deleted'))
    .catch(err => response.send(err));
}

module.exports = router;