const test = require('ava');
const { rexios } = require('../');

const method = 'delete';

test('Should return default url, method post, empty params', t => {
  const response = rexios({
    method
  });
  const expected = {
    method,
    args: [
      '/'
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url with id, method, without id params', t => {
  const params = { id: 1 };
  const response = rexios({
    method,
    params
  });
  const expected = {
    method,
    args: [
      '/1/'
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url with id, method, without id, article params', t => {
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
      '/1/'
    ]
  }
  t.deepEqual(response, expected);
});