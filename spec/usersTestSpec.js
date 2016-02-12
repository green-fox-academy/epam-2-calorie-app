'use strict';

var users = require('../server/users');

describe('test getAllUser', function() {
  it('is respons array', function(done) {
    var psql = {};
    psql.dbConnection = function(task,cb) {cb(null, [{}]);};
    users.getAll(psql, function(err, result) {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
