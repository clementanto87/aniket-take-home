import express, { Request, Response, NextFunction } from 'express';
import reviewsRouter from './routes/reviews';

const app = express();

app.use(express.json());

// Routes
app.use('/reviews', reviewsRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
