import express, { Request, Response } from 'express';

const router = express.Router();

interface Review {
    id: string;
    productId: string;
    rating: number;
    comment?: string;
    createdAt: Date;
}

// In-memory data store for reviews
const reviews: Review[] = [];

// Task 1: Implement POST /reviews
router.post('/', (req: Request, res: Response) => {
    // TODO: Implement review creation
    // 1. Validate input (productId, rating, comment)
    // 2. Store review
    // 3. Return created review
    res.status(501).json({ message: 'Not Implemented' });
});

// Task 1 & 5: Implement GET /reviews
router.get('/', (req: Request, res: Response) => {
    // TODO: Implement review retrieval
    // 1. Filter by productId if provided
    // 2. Implement pagination (Task 5)
    res.status(501).json({ message: 'Not Implemented' });
});

export default router;
