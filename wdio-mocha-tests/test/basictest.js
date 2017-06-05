/**
 * Created by rashmisagarsen on 02/06/2017.
 */
//webdrivercss

describe("basic test", function () {
    it("should load the page", function () {
        var selector = ".searchbar input";
        browser.url("/api.html");
        browser.setValue(selector, "hello");

        var shots = browser.webdrivercss("searchbox", [{
            elem: selector,
            name: "search"
        }]);

        expect(shots.search[0].isWithinMisMatchTolerance).to.be.true;
    })

});
