// Task 2: Implement Review Statistics Aggregator

interface ReviewSummary {
    averageRating: number;
    reviewCount: number;
    highestRating: number;
}

interface Review {
    rating: number;
    [key: string]: any;
}

/**
 * Calculates review statistics for a given product.
 * @param {string} productId - The ID of the product.
 * @param {Review[]} reviews - The list of all reviews (or fetch from store).
 * @returns {ReviewSummary} - { averageRating, reviewCount, highestRating }
 */
export function getReviewSummary(productId: string, reviews: Review[]): ReviewSummary {
    // TODO: Implement logic
    return {
        averageRating: 0,
        reviewCount: 0,
        highestRating: 0
    };
}
