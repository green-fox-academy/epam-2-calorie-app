'use strict';

var functions = require('./functions');
var users = require('./users.js');

describe('getTest2 returns string', function() {
  it('createQuery returns string', function() {
    expect(functions.createQuery('get', '/test2')).toBe('SELECT * FROM test2');
  });
});

describe('test getAllUser', function() {
  it('is respons array', function() {
    expect(Array.isArray(users.getAll(function(err, res)))).toBe(true);
  });
});
