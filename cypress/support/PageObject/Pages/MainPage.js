export class MainPage{
    
    searchProduct(item){
        cy.get('#twotabsearchtextbox').type(item)
        
    }

    clickSearch(){
        cy.get('#nav-search-submit-button').click();
    }

    clickToDoMenu(){
        cy.get('#nav-hamburger-menu').click();
    }
    getToDoMenuShopByDepartment(){
        cy.get('.hmenu-visible > :nth-child(6)');
    }
}

export const mainPage = new MainPage();