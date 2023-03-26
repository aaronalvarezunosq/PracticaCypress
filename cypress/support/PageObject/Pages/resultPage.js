export class resultPage{

    clickFirstResult(){
    cy.get('[data-image-index="1"]').first().click() //this returns a list of items but the first element is the image of the first search result, and clicks on it
    }

}

export const resultPage = new resultPage();