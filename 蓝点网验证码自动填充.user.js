// ==UserScript==
// @name         蓝点网验证码自动填充
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  蓝点网验证码自动填充，不用每次查看微信了。希望山外的鸭子哥不要恨我(^=^)
// @author       ssyatelandisi
// @match        https://www.landiannews.com/*
// @grant        none
// ==/UserScript==

(function() {
    $("#verifycode").val(272391);
})();