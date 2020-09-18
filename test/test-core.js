const test = require('ava');
const { rexios } = require('../');

test('Should return type function', t => {
  t.is(typeof(rexios), 'function');
});