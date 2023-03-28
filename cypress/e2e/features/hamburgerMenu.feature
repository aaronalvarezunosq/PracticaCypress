
Feature: Assert Hamburger Menu

    Background: "Navigate to Amazon mainpage"
        Given 3-1 Navigate to Amazon.com mainpage
        
        Scenario: "Assertions on ToDo Menu"
        When 3-1 I click on the Left Menu ToDo
        Then 3-1 Assert that section Buscar por departamento has: Electronicos,Computadoras,Smart Home,Arte y Artesanias Visible

        #Scenario: "Verify Hamburger left menu - Negative Scenario"
        #When I click on the Left Menu ToDo expecting false
        #Then Assert that section Buscar por Departamento does not have: testingElement visible