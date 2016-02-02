'use strict';


function getTest(req, res) {
  res.write('Hello World');
  res.end();
}


function getTest2(req, res) {
  var url = req.originalUrl;
  res.write(createQuery('get', url));
  res.end();
}

function createQuery(requestType, url) {
  if (requestType === 'get') {
    return 'SELECT * FROM ' + url.substring(1, url.length);
  }
}

module.exports = {
  createQuery: createQuery,
  getTest: getTest,
  getTest2: getTest2
};
