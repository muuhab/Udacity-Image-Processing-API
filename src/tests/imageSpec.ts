import supertest from 'supertest';
import app from '../index';
import image from '../utils/image';
import { mockRequest, mockResponse } from 'mock-req-res';
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

describe('Test image processing function', () => {
  it('test image function with right input', async () => {
    const res = mockResponse();
    const req = mockRequest({
      query: { filename: 'fjord', width: 200, height: 200 },
    });
    const result = await image(req, res);
    expect(result).toBe(200);
  });
  it('test image function with wrong input', async () => {
    const res = mockResponse();
    const req = mockRequest({
      query: { filename: 'x', width: 200, height: 200 },
    });
    const result = await image(req, res);
    expect(result).toBe(404);
  });
});
