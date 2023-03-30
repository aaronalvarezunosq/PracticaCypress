/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const ListaBuscarPorDepartamento = require('../support/PageObject/testData/BuscarPorDepartamento.json');
const ListaProgramaYFuncionalidades = require('../support/PageObject/testData/ProgramaYFuncionalidades');

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
    let i=0;
    //Este loop funciona pero es "fragil" ante cambios en la estructura del DOM
    
    for(i+5; i+5<9;i++){
    cy.get('#hmenu-content > .hmenu-visible > li > a[data-menu-id='+String(i+5)+']')
        .should('contain',ListaBuscarPorDepartamento.tags[i].sectionName)
            .log('validando que el elemento: '+ ListaBuscarPorDepartamento.tags[i].sectionName+' esté en la lista');
    }

    for(let j in ListaProgramaYFuncionalidades.tags){ //Este for valida las secciones de Programa y Funcionalidades
        
        cy.get('#hmenu-content > .hmenu-visible > li > a')
            .should('contain',ListaProgramaYFuncionalidades.tags[j].sectionName)
                .log('Validando que el menu contenga: '+ ListaProgramaYFuncionalidades.tags[j].sectionName);;
        } 
    })
//End of first scenario for Hamburger menu

//Start of second scenario of Hamburger menu cases - this is expected to fail
/*
When('3-2 I click on the Left Menu ToDo',() => {
    mainPage.clickToDoMenu();
})

Then('3-2 Assert that section Buscar por Departamento has: testingElement visible #this is expected to fail' , () => {
    cy.get('#hmenu-content > .hmenu-visible > li > a').contains(ListaBuscarPorDepartamento.tags[4].sectionName).should('be.visible').log(''Validando que el menu contenga: '+ ListaBuscarPorDepartamento.tags[4].sectionName');
    })*/