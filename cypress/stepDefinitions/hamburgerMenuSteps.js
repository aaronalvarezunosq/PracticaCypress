/// <reference types="Cypress" />

import {mainPage} from "../support/PageObject/Pages/MainPage.js";
const ListaBuscarPorDepartamento = require('../support/PageObject/testData/BuscarPorDepartamento.json');
const ListaProgramaYFuncionalidades = require('../support/PageObject/testData/ProgramaYFuncionalidades');

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('3-1 Navigate to Amazon.com mainpage', () => {
cy.visit('www.amazon.com/');
})

When('3-1 I click on the Left Menu ToDo',() => {
    mainPage.clickToDoMenu();
    //cy.xpath('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')
   //cy.get('//div[@id="hmenu-content"]//child::div[.= "buscar por departamento"]//parent::li//following-sibling::li//a[@class = "hmenu-item" and @data-menu-id < 10]')  selector ejemplo luis
})

Then('3-1 Assert that section Buscar por departamento has: Electronicos,Computadoras,Smart Home,Arte y Artesanias Visible' , () => {
    
    for(let i in ListaBuscarPorDepartamento.tags){ //Este for valida las secciones de Buscar por Departamento
    console.log('Validando que el menu contenga: '+ ListaBuscarPorDepartamento.tags[i].sectionName);
    cy.get('#hmenu-content > .hmenu-visible > li').should('contain',ListaBuscarPorDepartamento.tags[i].sectionName);
    }

    for(let j in ListaProgramaYFuncionalidades.tags){ //Este for valida las secciones de Programa y Funcionalidades
        console.log('Validando que el menu contenga: '+ ListaProgramaYFuncionalidades.tags[j].sectionName);
        cy.get('#hmenu-content > .hmenu-visible > li').should('contain',ListaProgramaYFuncionalidades.tags[j].sectionName);
        }
    //expect(1).to.equal(1); //placeholder assert
})