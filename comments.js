// Create web server application with Node.js and Express.js
// This file contains all routes for comments

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Route for getting all comments
router.get('/', commentController.getAll);

// Route for getting a comment by id
router.get('/:id', commentController.getCommentById);

// Route for creating a comment
router.post('/', commentController.create);

// Route for updating a comment
router.put('/:id', commentController.update);

// Route for deleting a comment
router.delete('/:id', commentController.delete);

module.exports = router;