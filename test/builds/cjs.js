import test from 'ava';
const { toZenkaku } = require('../../dist/hanzenkaku.cjs.js');

test('imports properly', t => {
  t.is(typeof toZenkaku, 'function');
});
