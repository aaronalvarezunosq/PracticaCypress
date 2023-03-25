export class homepage{
    
    searchProduct(item){
        cy.get('#twotabsearchtextbox').type(item)
        cy.get('#nav-search-submit-button').click();

    }

}

export const homepage = new homepage();