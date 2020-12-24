const ElementFinder = require('../mock/ElementFinder');
const Browser = require('../mock/Browser');
const HomePage = require('../../pop/HomePage');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    // TODO: write tests
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

   

});