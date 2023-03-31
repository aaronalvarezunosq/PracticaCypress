/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const ListaBuscarPorDepartamento = require('../support/PageObject/testData/BuscarPorDepartamento.json');
const ListaProgramaYFuncionalidades = require('../support/PageObject/testData/ProgramaYFuncionalidades');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('test-1 i navigate to amazon.com', () => {
cy.visit('www.amazon.com/');
})

//Start of first scenario of hamburger menu
When('test-1 i click on the ToDo menu',() => {
    mainPage.clickToDoMenu();
    //cy.xpath('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')
   //cy.get('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')  selector ejemplo luis
})

Then('I test my locator' , () => {
    //let i=0
    cy.get('.hmenu-visible > :nth-child(n+7):nth-child(-n+10) > .hmenu-item');
    //Este loop funciona pero es "fragil" ante cambios en la estructura del DOM
    /*
    for(i+5; i+5<9;i++){
    cy.get('#hmenu-content > .hmenu-visible > li > a[data-menu-id='+String(i+5)+']')
        .should('contain',ListaBuscarPorDepartamento.tags[i].sectionName)
            .log('validando que el elemento: '+ ListaBuscarPorDepartamento.tags[i].sectionName+' esté en la lista');
    }*/
    })