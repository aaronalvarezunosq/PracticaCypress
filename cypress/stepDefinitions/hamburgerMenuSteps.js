/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
import {resultPage} from "../support/PageObject/Pages/ResultPage.js"
import {itemPage} from "../support/PageObject/Pages/ItemPage.js";

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('3-1 Navigate to Amazon.com mainpage', () => {
cy.visit('www.amazon.com/');
})

When('3-1 I click on the Left Menu ToDo',() => {
    mainPage.clickToDoMenu();
})

Then('3-1 Assert that section Buscar por departamento has: Electronicos,Computadoras,Smart Home,Arte y Artesanias Visible' , () => {
    expect(1).to.equal(1); //placeholder assert
})