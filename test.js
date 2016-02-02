'use strict';

var request = require('request');

var functions = require('./functions');

var baseUrl = 'http://epam-2-calorie-app.herokuapp.com/';
var testUrl = 'http://epam-2-calorie-app.herokuapp.com/test';

describe('Calorie Counter App Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns Hello World', function(done) {
      request.get(testUrl, function(error, response, body) {
        expect(body).toBe('Hello World');
        done();
      });
    });
  });
});

describe('getTest2 returns string', function() {
  it('createQuery returns string', function() {
    expect(functions.createQuery('get', '/test2')).toBe('SELECT * FROM test2');
  });
});
