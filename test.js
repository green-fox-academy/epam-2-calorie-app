'use strict';

var request = require('request');

var baseUrl = 'http://epam-2-calorie-app.herokuapp.com/';

describe('Calorie Counter App Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns Hello World', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(body).toBe('Hello World');
        done();
      });
    });
  });
});
