/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";
const validators = require('../support/PageObject/testData/validationText.json');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to amazon.com for each item', () => {
cy.visit('www.amazon.com/');
})

//Start of Scenario 1
When('I type Macbook Air in Searchbar click the Search Button click on the first search result', (datatable) => {
datatable.hashes().forEach((element) =>{

    mainPage.searchProduct(element.article);
    mainPage.clickSearch();            
    resultPage.clickFirstResult();
    console.log('Now checking itemPage for: ' + element.article);

})
})

Then('Assert that the Macbook Air price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
    itemPage.assertPriceNotEmpty();
    itemPage.assertPriceNotNull();
    itemPage.assertPriceGreaterThanZero();
    itemPage.logItemPrice();
})
//End of Scenario 1

//Start of Scenario 2
When('I type Iphone 14 Pro Max in Searchbar click the Search Button click on the first search result', (datatable) => {
    datatable.hashes().forEach((element) =>{
    
        mainPage.searchProduct(element.article);
        mainPage.clickSearch();            
        resultPage.clickFirstResult();
        console.log('Now checking itemPage for: ' + element.article);
    
    })
    })
    
    Then('Assert that the Iphone 14 Pro Max price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
        itemPage.assertPriceNotEmpty();
        itemPage.assertPriceNotNull();
        itemPage.assertPriceGreaterThanZero();
        itemPage.logItemPrice();
    })
    //End of Scenario 2

    //Start of Scenario 3
    When('I type Samsung Galaxy S23 in Searchbar click the Search Button click on the first search result', (datatable) => {
        datatable.hashes().forEach((element) =>{
        
            mainPage.searchProduct(element.article);
            mainPage.clickSearch();            
            resultPage.clickFirstResult();
            console.log('Now checking itemPage for: ' + element.article);
        
        })
        })
        
        Then('Assert that the Samsung Galaxy S23 price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
            itemPage.assertPriceNotEmpty();
            itemPage.assertPriceNotNull();
            itemPage.assertPriceGreaterThanZero();
            itemPage.logItemPrice();
        })
    //End of Scenario 3