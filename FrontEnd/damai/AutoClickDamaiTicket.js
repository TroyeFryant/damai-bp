// ==UserScript==
// @name         H5Pay QR Code
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Generate QR code for the current URL and display it on the page.
// @author       TroyeFryant
// @match        https://mclient.alipay.com/h5pay/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(function () {
        $(document).ready(function () {
            var currentUrl = window.location.href;
            var qrContainer = $('<div id="qrCodeContainer" style="position: fixed; top: 10px; left: 10px; z-index: 1000; background: white; padding: 10px; border: 1px solid #000;"></div>');
            $('body').append(qrContainer);
            new QRCode(document.getElementById("qrCodeContainer"), {
                text: currentUrl,
                width: 128,
                height: 128
            });
        });
    }, 1000);
})();
