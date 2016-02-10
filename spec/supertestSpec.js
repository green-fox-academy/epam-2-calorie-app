'use strict';

var request = require('supertest');
var server = require('../server.js');

var connErr = {
  dbConnection: function(data, cb) {cb('test error', {rows: []});}
};

var conn = {
  dbConnection: function(data, cb) {cb(null, {rows: []});}
};

describe('Correct users returned', function () {
  it('supertest', function(done) {
    var app = server(connErr);
    request(app)
      .get('/db/users')
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});

describe('Correct users returned', function () {
  it('supertest', function(done) {
    var app = server(conn);
    request(app)
      .get('/db/consumption')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});

var post = 'INSERT INTO consumption (cons_name, cons_calories, user_id) VALUES ('
+'\''+ 'apple' +'\''+','+ '80' +','+ '1' + ');'
var connPost = {
  dbConnection: function(data, cb) {cb(null, {rows: []});}
};

describe('Correct users returned', function () {
  it('supertest', function(done) {
    var app = server(connPost);
    request(app)
      .post('/db/consumption')
      .send({cons_name: 'apple', cons_calories: 80, date: '', user_id: 1})
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
