
//var expect = require('chai').expect;

module.exports = function given() {
    this.Given(/^I go to the (homepage|API)$/,
        function (page, done) {
            if(page == 'homepage'){
                browser.url('./');

            } else{
                browser.url('./api.html')
            }
            done();
        }
    )

    this.When(/^I look at the (top|bottom)$/,
        function (location, done) {
            if(location == 'top'){
                browser.scroll(0,0);

            } else if (location == 'bottom'){
                browser.scrollTo('footer');
            }
            done();
        }
    )

    this.Then(/^the header should be visible$/,
        function (done) {
            var isVisible = browser.isVisible('.mainnav');
            expect(isVisible).to.be.true;

            done();
        }
    )
    this.Then(/^the element "([^"]*)?" is( not)* visible within viewport$/,
        function (element, falseCase, done) {

         // Visible state of the give element
         //@type {String}

            const isVisible = browser.isVisibleWithinViewport(element);

            if (falseCase) {
                expect(isVisible).to.not
                    .equal(true, `Expected element "${element}" not to be visible within viewport`);
            } else {
                expect(isVisible).to
                    .equal(true, `Expected element "${element}" to be visible within viewport`);
            }

            done();
        }
    )
}
