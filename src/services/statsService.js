// Task 2: Implement Review Statistics Aggregator

/**
 * Calculates review statistics for a given product.
 * @param {string} productId - The ID of the product.
 * @param {Array} reviews - The list of all reviews (or fetch from store).
 * @returns {Object} - { averageRating, reviewCount, highestRating }
 */
function getReviewSummary(productId, reviews) {
    // TODO: Implement logic
    return {
        averageRating: 0,
        reviewCount: 0,
        highestRating: 0
    };
}

module.exports = { getReviewSummary };
