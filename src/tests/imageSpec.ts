import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test image processing responses', () => {
  it('Pass all parameters', async (done) => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
    done();
  });
  it('Pass without width parameter', async (done) => {
    const response = await request.get('/api/images?filename=fjord&height=200');
    expect(response.status).toBe(200);
    done();
  });
  it('Pass without height parameter', async (done) => {
    const response = await request.get('/api/images?filename=fjord&width=200');
    expect(response.status).toBe(200);
    done();
  });
  it('Pass without name parameter', async (done) => {
    const response = await request.get('/api/images?width=200&height=200');
    expect(response.status).toBe(404);
    done();
  });
});
