/// <reference types = "cypress" />

import {homepage} from "../support/pageObject/pages/homepage.js";
import {resultPage} from "../support/pageObject/pages/resultPage.js"
import {itemPage} from "../support/pageObject/pages/itemPage.js";
const items = require('../support/pageObject/testData/Items.json');
const locators = require('../support/pageObject/testData/locators.json');
const validators = require('../support/PageObject/testData/validationText.json');

describe('Searches for a product on amazon and prints price in console',() =>{
    it('Searches for Iphone 14 Pro Max',() =>{
        cy.visit('www.amazon.com/')
        homepage.searchProduct(items.Iphone14ProMax);
        homepage.clickSearch();


    })

})