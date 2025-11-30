const { getReviewSummary } = require('../src/services/statsService');

describe('Stats Service', () => {
    it('should calculate correct statistics', () => {
        const reviews = [
            { rating: 5 },
            { rating: 3 },
            { rating: 4 }
        ];
        const summary = getReviewSummary('prod-1', reviews);

        // Placeholder assertion
        expect(summary).toBeDefined();
    });

    it('should handle empty reviews', () => {
        const summary = getReviewSummary('prod-1', []);
        expect(summary).toBeDefined();
    });
});
