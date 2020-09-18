const test = require('ava');
const { rexios } = require('../');

const method = 'get';

test('Should return default url, method, empty params', t => {
  const response = rexios();
  const expected = {
    method,
    args: [
      '/',
      { 
        params: {} 
      }
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url with id, method, empty params', t => {
  const response = rexios({
    params: { id: 1 }
  });
  const expected = {
    method,
    args: [
      '/1/',
      { 
        params: {} 
      }
    ]
  }
  t.deepEqual(response, expected);
});

test('Should return default url, method, with params', t => {
  const response = rexios({
    params: { article: 1 }
  });
  const expected = {
    method,
    args: [
      '/',
      { 
        params: {
          article: 1
        } 
      }
    ]
  }
  t.deepEqual(response, expected);
});

test.only('Should return default url with id, method, with params', t => {
  const response = rexios({
    params: { 
      id: 1,
      article: 1 
    }
  });
  const expected = {
    method,
    args: [
      '/1/',
      { 
        params: {
          article: 1
        } 
      }
    ]
  }
  t.deepEqual(response, expected);
});