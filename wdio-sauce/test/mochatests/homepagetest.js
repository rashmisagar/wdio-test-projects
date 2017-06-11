var assert = require('assert');
var request = require('request');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    describe('Api Page', function() {
        it('should have a link to the API page from the homepage', function () {
            browser.url('/');
            var hasApiLink = browser.isExisting('=API');
            //browser.isExisting('a[href="/api.html"]')
            assert(hasApiLink);

        })

        it('should take you to the API page', function () {
            browser.url('/');
            browser.click('=API');
            browser.pause(3000);
            var title = browser.getTitle();
            //console.log(title);
            assert.equal(title, 'WebdriverIO - API Docs');

            //browser.debug();

        })

        it('should filter search results', function () {
            browser.url('/api.html');

            browser.pause(2000);

            browser.setValue('input[name="search"]', 'debug');

            browser.saveScreenshot('api-with-result.png');

            //request.post("vrt-service.com", {});

        })

    });

});


