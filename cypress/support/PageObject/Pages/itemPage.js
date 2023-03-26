export class itemPage{
    logItemPrice(){
        cy.get('[class="a-price a-text-normal aok-align-center reinventPriceAccordionT2"]')
    .contains('$').then((price) =>{
      const pricetext = price.text() //stores the price value in variable pricetext
      cy.log('The price of the first result is: ' + pricetext) //prints price in console as string
    })
    }
}

export const itemPage = new itemPage();