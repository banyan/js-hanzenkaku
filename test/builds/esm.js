import test from 'ava';
import { toZenkaku } from '../../dist/hanzenkaku.esm.js';

test('imports properly', t => {
  t.is(typeof toZenkaku, 'function');
});
