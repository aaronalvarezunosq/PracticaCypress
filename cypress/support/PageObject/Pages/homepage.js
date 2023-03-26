export class homepage{
    
    searchProduct(item){
        cy.get('#twotabsearchtextbox').type(item)
        
    }

    clickSearch(){
        cy.get('#nav-search-submit-button').click();
    }
}

export const homepage = new homepage();