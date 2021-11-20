import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('check default endpoint', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    })
});
