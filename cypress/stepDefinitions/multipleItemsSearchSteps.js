/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";
const items = require('../support/PageObject/testData/Items.json');
const locators = require('../support/PageObject/testData/locators.json');
const validators = require('../support/PageObject/testData/validationText.json');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to amazon.com for each item', () => {
cy.visit('www.amazon.com/');
})

When('I type the article name in Searchbar I click the Search Button I click on the first search result', (datatable) => {
datatable.hashes().foreach((element) =>{

    mainPage.searchProduct(element.articulo);
    mainPage.clickSearch();            
    resultPage.clickFirstResult();


})
})

Then('Assert that the article price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
itemPage.logItemPrice();
})