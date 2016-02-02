'use strict';

var functions = require('./functions');

describe('getTest2 returns string', function() {
  it('createQuery returns string', function() {
    expect(functions.createQuery('get', '/test2')).toBe('SELECT * FROM test2');
  });
});
