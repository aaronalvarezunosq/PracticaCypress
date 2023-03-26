/// <reference types = "cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";
const items = require('../support/PageObject/testData/Items.json');
const locators = require('../support/PageObject/testData/locators.json');
const validators = require('../support/PageObject/testData/validationText.json');

describe('Searches for a product on amazon and prints price in console',() =>{
    it('Searches for Iphone 14 Pro Max',() =>{
        cy.visit('www.amazon.com/')
        mainPage.searchProduct(items.Iphone14ProMax);
        mainPage.clickSearch();
        cy.url().should('include',validators.Iphone14ProMax) //validates that the loaded page includes the search parameters
        resultPage.clickFirstResult();
        itemPage.logItemPrice(); //logs the price shown in the item page to the console
        //end of test
    })

})