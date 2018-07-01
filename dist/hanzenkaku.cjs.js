'use strict';

// * $Id: hanzenkaku.js,v 1.1 2013/05/13 15:54:38 dankogai Exp dankogai $
// *
// *  Licensed under the MIT license.
// *  http://www.opensource.org/licenses/mit-license.php
// hankaku <-> zenkaku
const re_h2z = new RegExp(
  '(?:' +
    [
      '[',
      '\uFF61\uFF62\uFF63\uFF65\uFF66\uFF67\uFF68\uFF69\uFF6A\uFF6B',
      '\uFF6C\uFF6D\uFF6E\uFF6F\uFF70\uFF71\uFF72\uFF74\uFF75\uFF85',
      '\uFF86\uFF87\uFF88\uFF89\uFF8F\uFF90\uFF91\uFF92\uFF93\uFF94',
      '\uFF95\uFF96\uFF97\uFF98\uFF99\uFF9A\uFF9B\uFF9C\uFF9D',
      ']',
      '|',
      '[',
      '\uFF73\uFF76\uFF77\uFF78\uFF79\uFF7A\uFF7B\uFF7C\uFF7D\uFF7E',
      '\uFF7F\uFF80\uFF81\uFF82\uFF83\uFF84',
      ']',
      '[\uFF9E]?',
      '|',
      '[\uFF8A\uFF8B\uFF8C\uFF8D\uFF8E][\uFF9E\uFF9F]?',
    ].join('') +
    ')',
  'g',
);

const re_z2h = new RegExp(
  '(?:[' +
    [
      '\u3002\u300C\u300D\u30A1\u30A2\u30A3\u30A4\u30A5\u30A6\u30A7',
      '\u30A8\u30A9\u30AA\u30AB\u30AC\u30AD\u30AE\u30AF\u30B0\u30B1',
      '\u30B2\u30B3\u30B4\u30B5\u30B6\u30B7\u30B8\u30B9\u30BA\u30BB',
      '\u30BC\u30BD\u30BE\u30BF\u30C0\u30C1\u30C2\u30C3\u30C4\u30C5',
      '\u30C6\u30C7\u30C8\u30C9\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF',
      '\u30D0\u30D1\u30D2\u30D3\u30D4\u30D5\u30D6\u30D7\u30D8\u30D9',
      '\u30DA\u30DB\u30DC\u30DD\u30DE\u30DF\u30E0\u30E1\u30E2\u30E3',
      '\u30E4\u30E5\u30E6\u30E7\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED',
      '\u30EF\u30F2\u30F3\u30F4\u30FB\u30FC',
    ].join('') +
    '])',
  'g',
);

const o_z2h = {
  '\u3002': '\uFF61',
  '\u300C': '\uFF62',
  '\u300D': '\uFF63',
  '\u30FB': '\uFF65',
  ー: '\uFF70',
  ァ: '\uFF67',
  ア: '\uFF71',
  ィ: '\uFF68',
  イ: '\uFF72',
  ゥ: '\uFF69',
  ウ: '\uFF73',
  ェ: '\uFF6A',
  エ: '\uFF74',
  ォ: '\uFF6B',
  オ: '\uFF75',
  カ: '\uFF76',
  ガ: '\uFF76\uFF9E',
  キ: '\uFF77',
  ギ: '\uFF77\uFF9E',
  ク: '\uFF78',
  グ: '\uFF78\uFF9E',
  ケ: '\uFF79',
  ゲ: '\uFF79\uFF9E',
  コ: '\uFF7A',
  ゴ: '\uFF7A\uFF9E',
  サ: '\uFF7B',
  ザ: '\uFF7B\uFF9E',
  シ: '\uFF7C',
  ジ: '\uFF7C\uFF9E',
  ス: '\uFF7D',
  ズ: '\uFF7D\uFF9E',
  セ: '\uFF7E',
  ゼ: '\uFF7E\uFF9E',
  ソ: '\uFF7F',
  ゾ: '\uFF7F\uFF9E',
  タ: '\uFF80',
  ダ: '\uFF80\uFF9E',
  チ: '\uFF81',
  ヂ: '\uFF81\uFF9E',
  ッ: '\uFF6F',
  ツ: '\uFF82',
  ヅ: '\uFF82\uFF9E',
  テ: '\uFF83',
  デ: '\uFF83\uFF9E',
  ト: '\uFF84',
  ド: '\uFF84\uFF9E',
  ナ: '\uFF85',
  ニ: '\uFF86',
  ヌ: '\uFF87',
  ネ: '\uFF88',
  ノ: '\uFF89',
  ハ: '\uFF8A',
  バ: '\uFF8A\uFF9E',
  パ: '\uFF8A\uFF9F',
  ヒ: '\uFF8B',
  ビ: '\uFF8B\uFF9E',
  ピ: '\uFF8B\uFF9F',
  フ: '\uFF8C',
  ブ: '\uFF8C\uFF9E',
  プ: '\uFF8C\uFF9F',
  ヘ: '\uFF8D',
  ベ: '\uFF8D\uFF9E',
  ペ: '\uFF8D\uFF9F',
  ホ: '\uFF8E',
  ボ: '\uFF8E\uFF9E',
  ポ: '\uFF8E\uFF9F',
  マ: '\uFF8F',
  ミ: '\uFF90',
  ム: '\uFF91',
  メ: '\uFF92',
  モ: '\uFF93',
  ャ: '\uFF6C',
  ヤ: '\uFF94',
  ュ: '\uFF6D',
  ユ: '\uFF95',
  ョ: '\uFF6E',
  ヨ: '\uFF96',
  ラ: '\uFF97',
  リ: '\uFF98',
  ル: '\uFF99',
  レ: '\uFF9A',
  ロ: '\uFF9B',
  ワ: '\uFF9C',
  ヲ: '\uFF66',
  ン: '\uFF9D',
  ヴ: '\uFF73\uFF9E',
};

const objectReverse = function(o) {
  const r = {};
  for (const p in o) r[o[p]] = p;
  return r;
};
const o_h2z = objectReverse(o_z2h);

const f_h2z = function(str) {
  return str.replace(re_h2z, function(m) {
    return o_h2z[m];
  });
};

const f_z2h = function(str) {
  return str.replace(re_z2h, function(m) {
    return o_z2h[m];
  });
};

// halfwidth <-> fullwidth
const o_hw2fw = (function(o) {
  for (let i = 0x21; i <= 0x7e; i++) {
    o[String.fromCharCode(i)] = String.fromCharCode(i + 0xff00 - 0x20);
  }
  return o;
})({
  '\u2985': '\uFF5F', // LEFT WHITE PARENTHESIS
  '\u2986': '\uFF60', // RIGHT WHITE PARENTHESIS
  '\u00A2': '\uFFE0', // CENT SIGN
  '\u00A3': '\uFFE1', // POUND SIGN
  '\u00AC': '\uFFE2', // NOT SIGN
  '\u00AF': '\uFFE3', // MACRON
  '\u00A6': '\uFFE4', // BROKEN BAR
  '\u00A5': '\uFFE5', // YEN SIGN
  '\u20A9': '\uFFE6', // WON SIGN
});

const re_hw2fw = /[\x21-\x7E\u2985\u2986\xA2\xA3\xAC\xAF\xA6\xA5\u20A9]/g;
const o_fw2hw = objectReverse(o_hw2fw);
const re_fw2hw = /[\uFF01-\uFFE6]/g;
const f_hw2fw = function(str) {
  return str.replace(re_hw2fw, function(m) {
    return o_hw2fw[m];
  });
};
const f_fw2hw = function(str) {
  return str.replace(re_fw2hw, function(m) {
    return o_fw2hw[m];
  });
};
const f_fs2hs = function(str) {
  return str.replace(/\u3000/g, ' ');
};
const f_hs2fs = function(str) {
  return str.replace(/ /g, '\u3000');
};
// katakana <-> hiragana
const o_h2k = (function() {
  const o = {};
  for (let i = 0x3041; i <= 0x3094; i++) {
    o[String.fromCharCode(i)] = String.fromCharCode(i - 0x3040 + 0x30a0);
  }
  return o;
})();
const o_k2h = objectReverse(o_h2k);
const f_h2k = function(str) {
  return str.replace(/[\u3041-\u3094]/g, function(m) {
    return o_h2k[m];
  });
};
const f_k2h = function(str) {
  return str.replace(/[\u30A1-\u30F4]/g, function(m) {
    return o_k2h[m];
  });
};

exports.toZenkaku = f_h2z;
exports.toHankaku = f_z2h;
exports.toFullwidth = f_hw2fw;
exports.toHalfwidth = f_fw2hw;
exports.toFullwidthSpace = f_hs2fs;
exports.toHalfwidthSpace = f_fs2hs;
exports.toKatakana = f_h2k;
exports.toHiragana = f_k2h;
//# sourceMappingURL=hanzenkaku.cjs.js.map
