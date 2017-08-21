const app = require('../../app');
const request = require('supertest')(app.listen());

describe('GET /', () => {
  it('responds with greeting', () =>
    request.get('/').expect('Content-Type', /json/).set('Accept', 'application/json').expect(200, {
      greeting: 'Hello world',
    }));
});
