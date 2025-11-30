const express = require('express');
const reviewsRouter = require('./routes/reviews');

const app = express();

app.use(express.json());

// Routes
app.use('/reviews', reviewsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
