[![build status](https://secure.travis-ci.org/dankogai/js-hanzenkaku.png)](http://travis-ci.org/dankogai/js-hanzenkaku)

# hanzenkaku.js

A Hankaku-Zenkaku translator in JavaScript.

## SYNOPSIS

### FUNCTIONAL INTERFACE

All functions are under the `HanZenKaku` namespace.

    HanZenKaku.h2z('ｺｶﾞｲﾀﾞﾝ');            // コガイダン
    HanZenKaku.z2h('コガイダン');         // ｺｶﾞｲﾀﾞﾝ
    HanZenKaku.hw2fw('dankogai');         // ｄａｎｋｏｇａｉ
    HanZenKaku.fw2hw('ｄａｎｋｏｇａｉ'); // dankogai
    HanZenKaku.fs2hs('dan　kogai');       // dan kogai
    HanZenKaku.hs2fs('dan kogai');        // dan　kogai
    HanZenKaku.h2k('こがいだん');         // コガイダン
    HanZenKaku.k2h('コガイダン');         // こがいだん
