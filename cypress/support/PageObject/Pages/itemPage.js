export class ItemPage{
    logItemPrice(){
      cy.get('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen').first().invoke('text').then((price) =>{
      //const pricetext = price.text() //stores the price value in variable pricetext
      cy.log('The price of the item is: ' + price) //prints price in console as string
    })
    }
    

    assertPriceNotEmpty(){
      cy.get('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen').first().invoke('text').then((price) =>{
        //const pricetext = price.text() //stores the price value in variable pricetext
        expect(price).to.not.be.empty
      })
    }

    assertPriceNotNull(){
      cy.get('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen').first().invoke('text').then((price) =>{
        //const pricetext = price.text() //stores the price value in variable pricetext
        expect(price).to.not.be.null
      })
    }

    assertPriceGreaterThanZero(){
      cy.get('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen').first().invoke('text').then((price) =>{
        let pricetext;
        if(price.length>3){
          pricetext = price.replace(',',''); //if the price is longer than 3 digits, remove the comma first
          pricetext = pricetext.replace('$','') //then remove the $ sign to validate as number  
        }
        else{ //if price is at most in the hundreds it can only remove the $ sign
          pricetext = price.replace('$',''); //stores the price string without $ in variable pricetext
        }
        
        expect(Number(pricetext)).to.be.greaterThan(0); //now this works properly for prices in the thousands
      })
    }
}

export const itemPage = new ItemPage();