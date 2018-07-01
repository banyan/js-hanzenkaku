/*
 * $Id: roundtrip.js,v 0.1 2012/08/13 05:43:10 dankogai Exp dankogai $
 */

import test from "ava";
import {
  toZenkaku,
  toHankaku,
  toFullwidth,
  toHalfwidth,
  toFullwidthSpace,
  toHalfwidthSpace,
  toKatakana,
  toHiragana
} from "../src/hanzenkaku";

const o_z2h = {
  "。": "｡",
  "「": "｢",
  "」": "｣",
  "」": "｣",
  "・": "･",
  ー: "ｰ",
  ァ: "ｧ",
  ア: "ｱ",
  ィ: "ｨ",
  イ: "ｲ",
  ゥ: "ｩ",
  ウ: "ｳ",
  ェ: "ｪ",
  エ: "ｴ",
  ォ: "ｫ",
  オ: "ｵ",
  カ: "ｶ",
  ガ: "ｶﾞ",
  キ: "ｷ",
  ギ: "ｷﾞ",
  ク: "ｸ",
  グ: "ｸﾞ",
  ケ: "ｹ",
  ゲ: "ｹﾞ",
  コ: "ｺ",
  ゴ: "ｺﾞ",
  サ: "ｻ",
  ザ: "ｻﾞ",
  シ: "ｼ",
  ジ: "ｼﾞ",
  ス: "ｽ",
  ズ: "ｽﾞ",
  セ: "ｾ",
  ゼ: "ｾﾞ",
  ソ: "ｿ",
  ゾ: "ｿﾞ",
  タ: "ﾀ",
  ダ: "ﾀﾞ",
  チ: "ﾁ",
  ヂ: "ﾁﾞ",
  ッ: "ｯ",
  ツ: "ﾂ",
  ヅ: "ﾂﾞ",
  テ: "ﾃ",
  デ: "ﾃﾞ",
  ト: "ﾄ",
  ド: "ﾄﾞ",
  ナ: "ﾅ",
  ニ: "ﾆ",
  ヌ: "ﾇ",
  ネ: "ﾈ",
  ノ: "ﾉ",
  ハ: "ﾊ",
  バ: "ﾊﾞ",
  パ: "ﾊﾟ",
  ヒ: "ﾋ",
  ビ: "ﾋﾞ",
  ピ: "ﾋﾟ",
  フ: "ﾌ",
  ブ: "ﾌﾞ",
  プ: "ﾌﾟ",
  ヘ: "ﾍ",
  ベ: "ﾍﾞ",
  ペ: "ﾍﾟ",
  ホ: "ﾎ",
  ボ: "ﾎﾞ",
  ポ: "ﾎﾟ",
  マ: "ﾏ",
  ミ: "ﾐ",
  ム: "ﾑ",
  メ: "ﾒ",
  モ: "ﾓ",
  ャ: "ｬ",
  ヤ: "ﾔ",
  ュ: "ｭ",
  ユ: "ﾕ",
  ョ: "ｮ",
  ヨ: "ﾖ",
  ラ: "ﾗ",
  リ: "ﾘ",
  ル: "ﾙ",
  レ: "ﾚ",
  ロ: "ﾛ",
  ワ: "ﾜ",
  ヲ: "ｦ",
  ン: "ﾝ",
  ヴ: "ｳﾞ"
};
const objectReverse = function(o) {
  var r = {};
  for (var p in o) r[o[p]] = p;
  return r;
};

const o_h2z = objectReverse(o_z2h);

const o_hw2fw = (function(o) {
  for (var i = 0x21; i <= 0x7e; i++) {
    o[String.fromCharCode(i)] = String.fromCharCode(i + 0xff00 - 0x20);
  }
  return o;
})({
  "\u2985": "\uFF5F", // LEFT WHITE PARENTHESIS
  "\u2986": "\uFF60", // RIGHT WHITE PARENTHESIS
  "\u00A2": "\uFFE0", // CENT SIGN
  "\u00A3": "\uFFE1", // POUND SIGN
  "\u00AC": "\uFFE2", // NOT SIGN
  "\u00AF": "\uFFE3", // MACRON
  "\u00A6": "\uFFE4", // BROKEN BAR
  "\u00A5": "\uFFE5", // YEN SIGN
  "\u20A9": "\uFFE6" // WON SIGN
});
const o_fw2hw = objectReverse(o_hw2fw);
const o_h2k = (function() {
  var o = {};
  for (var i = 0x3041; i <= 0x3094; i++) {
    o[String.fromCharCode(i)] = String.fromCharCode(i - 0x3040 + 0x30a0);
  }
  return o;
})();
const o_k2h = objectReverse(o_h2k);

for (const p in o_z2h) {
  test(`.toHankaku ${p}:${o_z2h[p]}`, t => {
    t.is(toHankaku(p), o_z2h[p]);
  });
}

for (const p in o_h2z) {
  test(`.toZenkaku ${p}:${o_h2z[p]}`, t => {
    t.is(toZenkaku(p), o_h2z[p]);
  });
}

for (const p in o_hw2fw) {
  test(`.toFullwidth ${p}:${o_hw2fw[p]}`, t => {
    t.is(toFullwidth(p), o_hw2fw[p]);
  });
}

for (const p in o_fw2hw) {
  test(`.toHalfwidth ${p}:${o_fw2hw[p]}`, t => {
    t.is(toHalfwidth(p), o_fw2hw[p]);
  });
}

for (const p in o_h2k) {
  test(`.toKatakana ${p}:${o_h2k[p]}`, t => {
    t.is(toKatakana(p), o_h2k[p]);
  });
}

for (const p in o_k2h) {
  test(`.toHiragana ${p}:${o_k2h[p]}`, t => {
    t.is(toHiragana(p), o_k2h[p]);
  });
}
