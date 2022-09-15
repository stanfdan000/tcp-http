import request from 'supertest';
import { serve } from './server.js';


describe('The TCP server', () => {
  let server = null;
  // let JSONserver = null;
  beforeEach(() => {
    // Deliberately omit the port so we get an available one.
    server = serve('localhost', undefined);
  });

  afterEach(() => {
    server.close();
  });

  // This test will fail initially since the project doesn't start with a
  // working HTTP server
  it('connects on the default port', async () => {
    await request(server)
      .get('/')
      .expect(200);
  });

  it('connecting to the /1 with json', async () => {
    await request(server)
      .post('/mail')
      .expect(204);
  });
});
