// ==UserScript==
// @name         chiphell-nav
// @namespace    https://github.com/turnon/chiphell_nav
// @version      0.0.1
// @description  chiphell_nav
// @author       block24block@gmail.com
// @match        https://www.chiphell.com
// @grant        none
// @require https://greasyfork.org/scripts/372188-ateles/code/ateles.js?version=631434
// ==/UserScript==
Ateles(['anchor', 'dropdown'], (anchor, dropdown) => {
    let topbar = document.querySelector('#toptb'),
        titles = anchor({
            selector: () => document.querySelectorAll('.area .titletext'),
            text: item => item.innerText
        })

    dropdown(titles, {
        afterbegin: topbar,
        direction: 'down_left',
        style: {
            id: 'position: fixed; left: calc((100% - 1200px)/2 - 30px);'
        }
    })
})