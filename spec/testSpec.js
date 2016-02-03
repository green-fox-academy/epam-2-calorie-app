'use strict';

var functions = require('../functions');
var users = require('../users');

describe('getTest2 returns string', function() {
  it('createQuery returns string', function() {
    expect(functions.createQuery('get', '/test2')).toBe('SELECT * FROM test2');
  });
});

describe('test getAllUser', function() {
  it('is respons array', function(done) {
    users.getAll(function(err, result) {
      console.log(result);
      var type = typeof result.rows;
      expect(type).toBe('object');
      done();
    });
  });
});
