import supertest from 'supertest';
import app from '../index';
import sharp from 'sharp'
import fs,{promises as fsPromises} from 'fs'

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
})

describe('Test image processing function', () => {
  beforeAll(async()=>{
      await fsPromises.mkdir('test-output');
    })
    
  it('test sharp function with right input',  async(done) => {
    let error=false

    try {
    await sharp('./images/fjord.jpg').toFile(`test-output/fjord.jpg`);
    } catch (e) {
      error=true

    }
    if(!fs.existsSync('test-output/fjord.jpg'))
    error=true
    expect(error).toBe(false);
    done();

  })
  it('test sharp function with wrong input',  async(done) => {
    let err=false
    try {
    await sharp('./images/x.jpg').toFile(`test-output/x.jpg`);
    } catch (error) {
      err=true
    }
    expect(err).toBe(true);
    done();

  })
  afterAll(async()=>{
    await fsPromises.unlink('test-output/fjord.jpg');
    await fsPromises.rmdir('test-output');
  })

})
