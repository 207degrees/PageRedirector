// ==UserScript==
// @name         Obsidian Redirector Auto Close
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically close Obsidian redirector tabs
// @match        *://edllt.github.io/PageRedirector/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    // Close the tab after a short delay to ensure the redirect has triggered
    setTimeout(() => window.close(), 1000);
})();
