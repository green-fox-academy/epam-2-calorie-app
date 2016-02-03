'use strict';

var functions = require('../functions');
var users = require('../users');
var items = require('../items');

describe('getTest2 returns string', function() {
  it('createQuery returns string', function() {
    expect(functions.createQuery('get', '/test2')).toBe('SELECT * FROM test2');
  });
});

describe('test getAllUser', function() {
  it('is respons array', function(done) {
    users.getAll(function(err, result) {
      expect(Array.isArray(result.rows)).toBe(true);
      done();
    });
  });
});

describe('test getAllConsumption', function() {
  it('is respons array', function(done) {
    items.getAll(function(err, result) {
      expect(Array.isArray(result.rows)).toBe(true);
      done();
    });
  });
});
