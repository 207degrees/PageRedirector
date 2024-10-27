// ==UserScript==
// @name         Google Tasks Obsidian Link Converter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Convert obsidian:// links in Google Tasks to clickable URLs
// @author       Me
// @match        https://calendar.google.com/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @inject-into  content
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';

    // Cache patterns and selectors
    const OBSIDIAN_URL_PATTERN = /obsidian:\/\/[^\s]*/;
    const DESCRIPTION_SELECTOR = '.PNVtnb .JnIHn.fbELB';
    const TASKS_CONTAINER_SELECTOR = '.Tasks';

    // Create link element template for reuse
    const linkTemplate = document.createElement('a');
    linkTemplate.style.cssText = 'color: #4285f4; text-decoration: underline;';

    // Debounce function with immediate option
    function debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const callNow = immediate && !timeout;
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
        };
    }

    // Optimized conversion function
    function convertObsidianLinks(rootElement = document) {
        // Use more efficient querySelectorAll with a root element
        const descriptions = rootElement.querySelectorAll(DESCRIPTION_SELECTOR);

        if (!descriptions.length) return; // Early exit if no elements found

        descriptions.forEach(desc => {
            // Skip if already processed
            if (desc.dataset.processed) return;

            const text = desc.textContent;
            if (!text || !text.includes('obsidian://')) return; // Early exit

            const obsidianUrl = text.match(OBSIDIAN_URL_PATTERN);
            if (obsidianUrl) {
                // Clone template instead of creating new element
                const link = linkTemplate.cloneNode();
                link.href = obsidianUrl[0];
                link.textContent = obsidianUrl[0];

                // Use textContent for better performance when safe
                desc.innerHTML = text.replace(obsidianUrl[0], link.outerHTML);
            }

            // Mark as processed
            desc.dataset.processed = 'true';
        });
    }

    // Debounced version of conversion function
    const debouncedConvert = debounce(convertObsidianLinks, 250);

    // Optimized observer with disconnect handling
    let observer;
    function createObserver() {
        observer = new MutationObserver((mutations) => {
            // Performance optimization: Process mutations in batches
            let shouldUpdate = false;
            let targetRoot = null;

            for (const mutation of mutations) {
                const hasRelevantChanges = [...mutation.addedNodes].some(node => {
                    if (node.querySelector?.('.PNVtnb')) {
                        targetRoot = node;
                        return true;
                    }
                    return false;
                });

                if (hasRelevantChanges) {
                    shouldUpdate = true;
                    break;
                }
            }

            if (shouldUpdate) {
                // Pass specific root element if found
                debouncedConvert(targetRoot || document);
            }
        });

        return observer;
    }

    function cleanup() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
    }

    function init() {
        const tasksContainer = document.querySelector(TASKS_CONTAINER_SELECTOR);
        if (tasksContainer) {
            createObserver().observe(tasksContainer, {
                childList: true,
                subtree: true
            });
            convertObsidianLinks();
        } else {
            requestAnimationFrame(init);
        }
    }

    // Cleanup on page unload
    window.addEventListener('unload', cleanup);

    // Start the script
    init();
});
