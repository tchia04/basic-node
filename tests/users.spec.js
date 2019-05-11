var app = require('../app');
var request = require('supertest');

describe('/users route',
  function () {
    describe('GET /users_x',
      function () {
        it('should respond with content',
          function (done) {
            request(app)
              .get('/users_x')
              .expect('Content-Type', /text\/html/)
              .expect(200, done);
          }
        );
      }
    );
  }
);
