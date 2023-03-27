Feature: Validate the article price of Items in Table

    Scenario: "Assert prices of Macbook Air, Iphone 14 pro max, Samsung Galaxy S23"
    Given I navigate to amazon.com for each item
    When I type the article name in Searchbar I click the Search Button I click on the first search result
        |   article             |
        |   Macbook Air         |
        |   Iphone 14 Pro Max   |
        |   Samsung Galaxy S23  |
    Then Assert that the article price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console