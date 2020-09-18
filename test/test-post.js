const test = require('ava');
const { rexios } = require('../');

const method = 'post';

test('Should return default url, method post, empty params', t => {
  const response = rexios({
    method
  });
  const expected = {
    method,
    args: [
      '/',
      {}
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url, method, params with id', t => {
  const params = { id: 1 };
  const response = rexios({
    method,
    params
  });
  const expected = {
    method,
    args: [
      '/',
      { 
        ...params
      }
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url, method, params with id and article', t => {
  const params = { 
    id: 1,
    article: 1
  };
  const response = rexios({
    method,
    params
  });
  const expected = {
    method,
    args: [
      '/',
      { 
        ...params
      }
    ]
  }
  t.deepEqual(response, expected);
});