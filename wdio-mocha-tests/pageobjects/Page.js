/**
 * Created by rashmisagarsen on 02/06/2017.
 */

function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url('/' + path)
}
module.exports = new Page()

//using ES6 class

/*
"use strict";
class Page {
    constructor() {
        this.title = 'My Page';
    }
    open(path) {
        browser.url('/' + path);
    }
}
module.exports = new Page();
*/
