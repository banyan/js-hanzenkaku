import test from 'ava';
import {
  toZenkaku,
  toHankaku,
  toFullwidth,
  toHalfwidth,
  toFullwidthSpace,
  toHalfwidthSpace,
  toKatakana,
  toHiragana,
} from './src/hanzenkaku';

test('.toZenkaku', t => {
  t.is(toZenkaku('ｺｶﾞｲﾀﾞﾝ'), 'コガイダン');
});

test('.toHankaku', t => {
  t.is(toHankaku('コガイダン'), 'ｺｶﾞｲﾀﾞﾝ');
});

test('.toFullwidth', t => {
  t.is(toFullwidth('dankogai'), 'ｄａｎｋｏｇａｉ');
});

test('.toHalfwidth', t => {
  t.is(toHalfwidth('ｄａｎｋｏｇａｉ'), 'dankogai');
});

test('.toFullwidthSpace', t => {
  t.is(toFullwidthSpace('dan kogai'), 'dan　kogai');
});

test('.toHalfwidthSpace', t => {
  t.is(toHalfwidthSpace('dan　kogai'), 'dan kogai');
});

test('.toKatakana', t => {
  t.is(toKatakana('こがいだん'), 'コガイダン');
});

test('.toHiragana', t => {
  t.is(toHiragana('コガイダン'), 'こがいだん');
});
