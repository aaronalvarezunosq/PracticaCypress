/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";
const items = require('../support/PageObject/testData/Items.json');
const locators = require('../support/PageObject/testData/Locators.json');
const validators = require('../support/PageObject/testData/validationText.json');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('1-1 I navigate to amazon.com', () => {
cy.visit('www.amazon.com/');
})

When('1-1 I type Iphone 14 Pro Max in Searchbar I click the Search Button I click on the first search result', () => {
mainPage.searchProduct(items.Iphone14ProMax)
mainPage.clickSearch();            
resultPage.clickFirstResult();

})

Then('1-1 Assert that the price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
itemPage.assertPriceNotEmpty();
itemPage.assertPriceNotNull();
itemPage.assertPriceGreaterThanZero();
itemPage.logItemPrice();
})