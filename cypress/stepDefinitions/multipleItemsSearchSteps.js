/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";
const validators = require('../support/PageObject/testData/validationText.json'); //not used at the moment

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('2-1 I navigate to amazon.com for each item ', () => {
cy.visit('www.amazon.com/');
})

//Start of Scenario 1
When('2-1 I type Macbook Air M1 in Searchbar click the Search Button click on the first search result', (datatable) => {
datatable.hashes().forEach((element) =>{

    mainPage.searchProduct(element.article);
    mainPage.clickSearch();            
    resultPage.clickFirstResult();
    console.log('Now checking itemPage for: ' + element.article);

})
})

Then('2-1 Assert that the Macbook Air M1 price is not empty, not null, greater than 0 and Log the price in the console', () => {
    itemPage.assertPriceNotEmpty();
    itemPage.assertPriceNotNull();
    itemPage.assertPriceGreaterThanZero();
    itemPage.logItemPrice();
})
//End of Scenario 1

//Start of Scenario 2
When('2-2 I type Iphone 14 Pro Max in Searchbar click the Search Button click on the first search result', (datatable) => {
    datatable.hashes().forEach((element) =>{
    
        mainPage.searchProduct(element.article);
        mainPage.clickSearch();            
        resultPage.clickFirstResult();
        console.log('Now checking itemPage for: ' + element.article);
    
    })
    })
    
    Then('2-2 Assert that the Iphone 14 Pro Max price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
        itemPage.assertPriceNotEmpty();
        itemPage.assertPriceNotNull();
        itemPage.assertPriceGreaterThanZero();
        itemPage.logItemPrice();
    })
    //End of Scenario 2

    //Start of Scenario 3
    When('2-3 I type Samsung Galaxy S23 in Searchbar click the Search Button click on the first search result', (datatable) => {
        datatable.hashes().forEach((element) =>{
        
            mainPage.searchProduct(element.article);
            mainPage.clickSearch();            
            resultPage.clickFirstResult();
            console.log('Now checking itemPage for: ' + element.article);
        
        })
        })
        
        Then('2-3 Assert that the Samsung Galaxy S23 price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console', () => {
            itemPage.assertPriceNotEmpty();
            itemPage.assertPriceNotNull();
            itemPage.assertPriceGreaterThanZero();
            itemPage.logItemPrice();
        })
    //End of Scenario 3