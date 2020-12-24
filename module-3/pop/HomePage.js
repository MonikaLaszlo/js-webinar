/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

const Element = require('./Element');
const Layout = require("./Layout");

class HomePage extends Layout {
    constructor() {
        super('Home Page', 'https://epam.com', by.tagName('body'));
        const header = new Element('Header', by.tagName('header'));
        this.addChildren(header);
        const logo = new Element('Logo', by.css('.header__logo'));
        header.addChildren(logo);
    }

}
module.exports = HomePage;
