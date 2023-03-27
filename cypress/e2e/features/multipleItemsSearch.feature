Feature: Validate the article price of Items in Table

    Background: "set up the main page of amazon"
        Given I navigate to amazon.com for each item 

    Scenario: "Assert prices of Macbook Air"
    When I type Macbook Air in Searchbar click the Search Button click on the first search result
        |article             |
        |Macbook Air         |
    Then Assert that the Macbook Air price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console

    Scenario: "Assert prices of Iphone 14 Pro Max"
    When I type Iphone 14 Pro Max in Searchbar click the Search Button click on the first search result
        |article             |
        |Iphone 14 Pro Max   |
    Then Assert that the Iphone 14 Pro Max price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console

    Scenario: "Assert prices of Samsung Galaxy S23"
    When I type Samsung Galaxy S23 in Searchbar click the Search Button click on the first search result
        |article             |
        |Samsung Galaxy S23  |
    Then Assert that the Samsung Galaxy S23 price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console