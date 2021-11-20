import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('Pass all parameters', async (done) => {
        const response = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
        done();
    })
});
