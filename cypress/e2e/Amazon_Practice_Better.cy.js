describe('Amazon first result price', () => {
  it('Prints first result price', () => {
    cy.visit('www.amazon.com/') // this opens the website

	cy.url().should('include','amazon.com') //small assertion that the site was indeed loaded
	cy.get('[id="twotabsearchtextbox"]').as('searchbar') //locates the search bar
	cy.get('@searchbar').type('Iphone 14 prox max') //types in the desired search parameter
	
	cy.get('[id="nav-search-submit-button"]').click() //clicks on the "search" part of the bar
	cy.url().should('include','Iphone+14+prox+max') //validates that the loaded page includes the search parameters
	
	cy.get('[data-image-index="1"]').first().click() //this returns a list of items but the first element is the image of the first search result, and clicks on it
	
  cy.get('[class="a-price a-text-normal aok-align-center reinventPriceAccordionT2"]')
    .contains('$').then((price) =>{
      const pricetext = price.text() //almacena el precio del primer resultado en la variable pricetext
      cy.log('The price of the first result is: ' + pricetext) //imprime el precio del primer resultado como string
    })
  
  })
})