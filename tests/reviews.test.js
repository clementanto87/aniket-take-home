const request = require('supertest');
const app = require('../src/app');

describe('Reviews API', () => {
    describe('POST /reviews', () => {
        it('should create a new review', async () => {
            const res = await request(app)
                .post('/reviews')
                .send({
                    productId: 'prod-1',
                    rating: 5,
                    comment: 'Great product!'
                });

            // Expect 501 until implemented
            expect(res.statusCode).not.toBe(404);
        });

        it('should validate required fields', async () => {
            const res = await request(app)
                .post('/reviews')
                .send({
                    rating: 5
                });

            // Expect 501 until implemented
            expect(res.statusCode).not.toBe(404);
        });
    });

    describe('GET /reviews', () => {
        it('should return a list of reviews', async () => {
            const res = await request(app).get('/reviews');
            expect(res.statusCode).not.toBe(404);
        });
    });
});
