export class MainPage{
    
    searchProduct(item){
        cy.get('#twotabsearchtextbox').type(item)
        
    }

    clickSearch(){
        cy.get('#nav-search-submit-button').click();
    }
}

export const mainPage = new MainPage();