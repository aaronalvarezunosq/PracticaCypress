/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const ListaBuscarPorDepartamento = require('../support/PageObject/testData/BuscarPorDepartamento.json');
const ListaProgramaYFuncionalidades = require('../support/PageObject/testData/ProgramaYFuncionalidades.json');
const selectors = require('../support/PageObject/testData/Locators.json');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('3-1 Navigate to Amazon.com mainpage', () => {
cy.visit('www.amazon.com/');
})

//Start of first scenario of hamburger menu
When('3-1 I click on the Left Menu ToDo',() => {
    mainPage.clickToDoMenu();
    //cy.xpath('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')
   //cy.get('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')  selector ejemplo luis
})

Then('3-1 Assert that section Buscar por departamento has: Electronicos,Computadoras,Smart Home,Arte y Artesanias Visible' , () => {    
    cy.get(selectors.locatorDepartamento).then((selection) =>{
        
        for(let i=0; i<ListaBuscarPorDepartamento.tags.length;i++){
        cy.wrap(selection).should('contain',ListaBuscarPorDepartamento.tags[i])
            .log('validando que el elemento: '+ ListaBuscarPorDepartamento.tags[i]+' esté en la lista');
    }
    })

    cy.get(selectors.locatorProgramas).then((selection) =>{
        
        for(let i=0; i<ListaProgramaYFuncionalidades.tags.length;i++){
        cy.wrap(selection).should('contain',ListaProgramaYFuncionalidades.tags[i])
            .log('validando que el elemento: '+ ListaProgramaYFuncionalidades.tags[i]+' esté en la lista');
    }
    })

    })
//End of first scenario for Hamburger menu

//Start of second scenario of Hamburger menu cases - this is expected to fail
When('3-2 I click on the Left Menu ToDo',() => {
    mainPage.clickToDoMenu();
})

Then('3-2 Assert that section Programa Y Funcionalidades has: testingElement visible #this is expected to fail' , () => {
    
    /*
    cy.get(selectors.locatorProgramas).then((selection) =>{ //This implementation uses a for loop and wrapper to validate each HTML element
        
        for(let i=0; i<ListaProgramaYFuncionalidades.tagsToFail.length;i++){
        cy.wrap(selection).contains(ListaProgramaYFuncionalidades.tagsToFail[i]).scrollIntoView().should('be.visible').screenshot({capture:"runner"})
            .log('validando que el elemento: '+ ListaProgramaYFuncionalidades.tagsToFail[i]+' esté en la lista');
    }
    })*/
    const listaget = []; //This achieves the same comparison as above but comparing the String of each section in an array
    cy.get(selectors.locatorProgramas).each((selection) =>{
            listaget.push(selection.text());

    })
        .then(() =>{
            for(let i=0;i<ListaProgramaYFuncionalidades.tagsToFail.length;i++){
                expect(listaget).to.include(ListaProgramaYFuncionalidades.tagsToFail[i]);
            }
            })

    })