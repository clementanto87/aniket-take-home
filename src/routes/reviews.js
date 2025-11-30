const express = require('express');
const router = express.Router();

// In-memory data store for reviews
const reviews = [];

// Task 1: Implement POST /reviews
router.post('/', (req, res) => {
    // TODO: Implement review creation
    // 1. Validate input (productId, rating, comment)
    // 2. Store review
    // 3. Return created review
    res.status(501).json({ message: 'Not Implemented' });
});

// Task 1 & 5: Implement GET /reviews
router.get('/', (req, res) => {
    // TODO: Implement review retrieval
    // 1. Filter by productId if provided
    // 2. Implement pagination (Task 5)
    res.status(501).json({ message: 'Not Implemented' });
});

module.exports = router;
