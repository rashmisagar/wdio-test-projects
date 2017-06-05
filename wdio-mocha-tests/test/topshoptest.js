
var assert = require('assert');
var request = require('request');

describe('Topshop home page', function() {

    it('When I am on the landing page', function () {
        browser.url('/');
        var title = browser.getTitle();
        console.log(title);
        //assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    })

    it('Then I can see logo in navigation bar', function () {
        browser.url('/');
        var hasApiLink = browser.isVisible(".BrandLogo-img");
        assert(hasApiLink);
    });

    describe('Tops Page Filter By Colour', function() {

        it('Given I am viewing product list tops', function () {
            browser.url('/');
            browser.pause(2000);
            browser.click('#root > div > div.Main-body > div:nth-child(1) > div > div.Header > ' +
                'button.Header-left.Header-searchButton')
            .pause(2000);
            browser.setValue('#searchTermInput', 'tops');
            browser.click('#root > div > div.Main-body > div:nth-child(1) > div > div.SearchBar.SearchBar-open > form > div > button')
                .pause(4000);
            var hasTopsHeader = browser.getText('#root > div > div.Main-body > div.Main-inner > div > div > ' +
                'div.PlpContainer-productListContainer > h1 > span.PlpHeader-title');
            assert.equal(hasTopsHeader,'Tops');

        })

        it('Given I filter the product list', function () {

            browser.isVisible('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer' +
                ' > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button');
            browser.click('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > ' +
                'div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button');
        })

        it('Given I filter by option "Colour"', function () {

            var hasColourFilter = browser.getText('#root > div > div.Main-body.is-notScrollable > div.Main-inner > ' +
                'div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
                'div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > ' +
                'div > span.RefinementList-label.is-value');

            assert.equal(hasColourFilter,'Colour');
            browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > ' +
                'div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
                'div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > ' +
                'div > span.RefinementList-label.is-value');

        })

        it('Given I select colour "Black"', function () {

            var hasApiLink = browser.isVisible("#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > " +
                "div.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-label");
            assert(hasApiLink);
            browser.click("#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > " +
                "div > div > div > button:nth-child(1) > span.ValueOption-label");

            var valColourFilter = browser.getText('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > ' +
                'div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
                'div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > ' +
                'div.Accordion-header.is-padded > header > div > span.RefinementList-selection.is-value');

            assert.equal(valColourFilter,'Black');

        })

        it('When I apply these filters', function () {

            browser.isVisible('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-applyButtonWrapper > button');
            browser.click('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.Refinements-applyButtonWrapper > button');

        })

        it('Then Filter button has 1 filter', function () {

            var numberoffilterapplied = browser.getText('#root > div > div.Main-body > div.Main-inner > div > div > ' +
                'div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > ' +
                'div.Filters-column.Filters-refineButtonContainer > button > span');
            assert.equal(numberoffilterapplied, '(1)');

        })

        it('Then Filter returns a product list', function () {
            var hasTopsHeader = browser.getText('#root > div > div.Main-body > div.Main-inner > div > div > ' +
                'div.PlpContainer-productListContainer > h1 > span.PlpHeader-title');
            assert.equal(hasTopsHeader,'Tops');

        })


    });

});
