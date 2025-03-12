// ==UserScript==
// @name         anta-DMS
// @namespace    http://tampermonkey.net/
// @version      2025-02-28
// @description  try to take over the world!
// @author       You
// @match        https://dms.anta.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=anta.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 方式1：通过注入全局样式覆盖限制
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            user-select: auto !important;
            -webkit-user-select: auto !important;
            -moz-user-select: auto !important;
        }
        .e-line { /* 针对图中红色框标记的特殊类名 */
            user-select: auto !important;
            -webkit-user-select: auto !important;
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(style);
})();
